param(
  [string]$TexPath = "..\resume_2_page.tex",
  [string]$ClassPath = "..\formating.cls"
)
$ErrorActionPreference = "Stop"
$projectRoot = Split-Path -Parent $PSScriptRoot
$resolvedTex = (Resolve-Path -LiteralPath (Join-Path $projectRoot $TexPath)).Path
$resolvedClass = (Resolve-Path -LiteralPath (Join-Path $projectRoot $ClassPath)).Path
$pdfDirectory = Join-Path $projectRoot "assets/pdf"
$jobName = "Bharat_Govil_CV"
$oldTexInputs = $env:TEXINPUTS
if (-not (Get-Command xelatex -ErrorAction SilentlyContinue)) { throw "XeLaTeX is not installed." }
Push-Location (Split-Path -Parent $resolvedTex)
try {
  $env:TEXINPUTS = "$(Split-Path -Parent $resolvedClass);$oldTexInputs"
  for ($pass = 0; $pass -lt 2; $pass++) {
    & xelatex -interaction=nonstopmode -halt-on-error "-jobname=$jobName" "-output-directory=$pdfDirectory" $resolvedTex
    if ($LASTEXITCODE -ne 0) { throw "XeLaTeX failed." }
  }
} finally {
  $env:TEXINPUTS = $oldTexInputs
  Pop-Location
}
foreach ($extension in @("aux", "log", "out")) {
  $artifact = Join-Path $pdfDirectory "$jobName.$extension"
  if (Test-Path -LiteralPath $artifact) { Remove-Item -LiteralPath $artifact -Force }
}
Write-Host "Updated assets/pdf/Bharat_Govil_CV.pdf"

