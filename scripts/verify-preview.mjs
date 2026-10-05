import assert from "node:assert/strict";
import { mkdir, readdir } from "node:fs/promises";
import { chromium } from "@playwright/test";

const origin = process.env.PREVIEW_URL || "http://127.0.0.1:8080";
const output = "output/playwright/personal-site";
const projectCount = (await readdir(new URL("../_projects/", import.meta.url))).filter((name) => name.endsWith(".md")).length;
await mkdir(output, { recursive: true });
const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
const page = await context.newPage();
const errors = [];
page.on("pageerror", (error) => errors.push(error.message));
try {
  const response = await page.goto(origin, { waitUntil: "networkidle" });
  assert.equal(response.status(), 200);
  assert.match(await page.title(), /Bharat Govil/);
  assert.deepEqual(await page.locator("article section > h2").allTextContents(), ["Publications", "Experience", "Education", "Projects"]);
  assert.equal(await page.locator("#projects article").count(), projectCount);
  assert.match(await page.locator("#experience").innerText(), /55,079/);
  const portrait = page.locator('img[src*="bharat-govil"]');
  assert.equal(await portrait.count(), 1);
  assert.ok(await portrait.evaluate((img) => img.complete && img.naturalWidth > 0), "Portrait did not load");
  await page.screenshot({ path: `${output}/desktop.png`, fullPage: true });

  const internalLinks = await page
    .locator("a[href]")
    .evaluateAll((links) => [
      ...new Set(links.map((link) => link.getAttribute("href")).filter((href) => href.startsWith("/") && !href.startsWith("//"))),
    ]);
  for (const link of internalLinks) {
    const result = await context.request.get(new URL(link, origin).href);
    assert.ok(result.ok(), `${link}: HTTP ${result.status()}`);
  }
  for (const route of ["/publications/", "/projects/", "/cv/"]) {
    const result = await page.goto(`${origin}${route}`, { waitUntil: "networkidle" });
    assert.equal(result.status(), 200, route);
    assert.match(await page.locator("body").innerText(), /Bharat Govil/);
    if (route === "/cv/") {
      assert.match(await page.locator("body").innerText(), /Princeton/);
      assert.match(await page.locator("body").innerText(), /Amazon Robotics/);
      assert.match(await page.locator("body").innerText(), /7,813/);
      await page.screenshot({ path: `${output}/cv.png`, fullPage: true });
    }
  }
  const researchChecks = [
    ["multimodal-navigation", /55,079/, /ongoing/],
    ["language-tool-manipulation", /27 training tools/, /simulation results/],
    ["invertible-world-models", /4,574/, /one seed/],
    ["task-separation", /82\.9%/, /not direct measurements/],
    ["case", /68\.5%/, /124 questions/],
    ["bert-semantic-variation", /1,028/, /p < 0\.1/],
    ["word-sense-induction", /37\.58/, /did not improve/],
  ];
  for (const [slug, ...patterns] of researchChecks) {
    const response = await page.goto(`${origin}/projects/${slug}/`, { waitUntil: "networkidle" });
    assert.equal(response.status(), 200, slug);
    const body = await page.locator("body").innerText();
    for (const pattern of patterns) assert.match(body, pattern, slug);
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `${slug}: desktop overflow`);
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(origin, { waitUntil: "networkidle" });
  assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), "Mobile page overflows horizontally");
  await page.getByRole("button", { name: "Toggle navigation" }).click();
  await page.locator('#navbarNav a[href="/projects/"]').waitFor({ state: "visible" });
  await page.screenshot({ path: `${output}/mobile.png`, fullPage: true });
  await page.getByRole("button", { name: "Change color theme" }).click();
  await page.screenshot({ path: `${output}/mobile-theme.png`, fullPage: true });
  assert.deepEqual(errors, [], "Browser runtime errors");
  console.log(
    `Verified homepage, section order, ${projectCount} projects and sourced research details, portrait, ${internalLinks.length} internal links, CV, mobile layout and menu. Screenshots: ${output}`
  );
} finally {
  await browser.close();
}
