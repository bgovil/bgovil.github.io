$ErrorActionPreference = "Stop"
$projectRoot = Split-Path -Parent $PSScriptRoot
if (-not (Get-Command docker -ErrorAction SilentlyContinue)) {
  throw "Install and start Docker Desktop, enable its WSL 2 backend, then restart this terminal."
}
Push-Location $projectRoot
try {
  & docker info *> $null
  if ($LASTEXITCODE -ne 0) { throw "Docker Desktop is not running. Start it and retry." }
  if (-not (Test-Path -LiteralPath "assets/img/bharat-govil.jpg")) { throw "The portrait is missing." }
  Write-Host "Building al-folio. The first run downloads Ruby, Jekyll, and image tools."
  Write-Host "After Jekyll reports that the server is running, open http://localhost:8080"
  & docker compose up --build
  if ($LASTEXITCODE -ne 0) { throw "The al-folio preview failed. Review the output above." }
} finally {
  Pop-Location
}

