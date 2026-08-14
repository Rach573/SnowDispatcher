$ErrorActionPreference = 'Stop'

$projectRoot = $PSScriptRoot
$backendProject = Join-Path $projectRoot 'backend\Api\Api.csproj'
$frontendDirectory = Join-Path $projectRoot 'frontend\SnowDispatcher.Frontend'

function Test-TcpPort {
    param(
        [string]$HostName,
        [int]$Port
    )

    $client = [System.Net.Sockets.TcpClient]::new()

    try {
        $connection = $client.ConnectAsync($HostName, $Port)
        return $connection.Wait(1500) -and $client.Connected
    }
    catch {
        return $false
    }
    finally {
        $client.Dispose()
    }
}

if (-not (Test-TcpPort -HostName '127.0.0.1' -Port 3306)) {
    Write-Host 'MariaDB ne repond pas sur le port 3306.' -ForegroundColor Red
    Write-Host 'Demarre MySQL dans XAMPP, puis relance ce script.'
    exit 1
}

Write-Host 'MariaDB : OK (port 3306)' -ForegroundColor Green

if (Test-TcpPort -HostName '127.0.0.1' -Port 5102) {
    Write-Host 'API : deja demarree sur http://localhost:5102' -ForegroundColor Yellow
}
else {
    $backend = Start-Process `
        -FilePath 'dotnet' `
        -ArgumentList @('run', '--project', $backendProject, '--urls', 'http://localhost:5102') `
        -WorkingDirectory $projectRoot `
        -WindowStyle Hidden `
        -PassThru

    Write-Host "API : demarrage en cours (PID $($backend.Id))" -ForegroundColor Green
}

if (Test-TcpPort -HostName '127.0.0.1' -Port 4200) {
    Write-Host 'Angular : deja demarre sur http://localhost:4200' -ForegroundColor Yellow
}
else {
    $frontend = Start-Process `
        -FilePath 'npm.cmd' `
        -ArgumentList @('start') `
        -WorkingDirectory $frontendDirectory `
        -WindowStyle Hidden `
        -PassThru

    Write-Host "Angular : demarrage en cours (PID $($frontend.Id))" -ForegroundColor Green
}

Write-Host ''
Write-Host 'Application : http://localhost:4200'
Write-Host 'API         : http://localhost:5102'
Write-Host 'Controle DB : http://localhost:5102/debug/db'
