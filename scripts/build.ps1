$ErrorActionPreference = "Stop"
$projectRoot = Split-Path -Parent $PSScriptRoot
if (-not (Get-Command docker -ErrorAction SilentlyContinue)) {
  throw "Install and start Docker Desktop before building al-folio."
}
Push-Location $projectRoot
try {
  & docker compose build
  if ($LASTEXITCODE -ne 0) { throw "The Docker image build failed." }
  & docker compose run --rm -e JEKYLL_ENV=production jekyll bundle exec al-folio upgrade audit --no-fail
  if ($LASTEXITCODE -ne 0) { throw "The al-folio upgrade audit failed." }
  & docker compose run --rm -e JEKYLL_ENV=production jekyll bundle exec jekyll build --destination /srv/jekyll/_site
  if ($LASTEXITCODE -ne 0) { throw "The Jekyll build failed." }
  foreach ($required in @("_site/index.html", "_site/projects/index.html", "_site/publications/index.html", "_site/cv/index.html", "_site/assets/img/bharat-govil.jpg", "_site/assets/pdf/Bharat_Govil_CV.pdf")) {
    if (-not (Test-Path -LiteralPath $required)) { throw "Build output is missing $required" }
  }
  Write-Host "Verified the al-folio build in _site."
} finally {
  Pop-Location
}

