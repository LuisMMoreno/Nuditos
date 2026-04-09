@echo off
setlocal
chcp 65001 > nul
title NUDITOS - Lanzador Automático de Bienestar

:: Colores: 0F = Fondo negro, Letras blancas brillantes
color 0F

cls
echo.
echo  ==============================================================
echo                BIENVENIDO AL SISTEMA DE NUDITOS
echo  ==============================================================
echo.
echo  Este asistente preparará todo para que puedas ver la página.
echo  No cierres esta ventana hasta que termines de usar la web.
echo.
echo  --------------------------------------------------------------
echo  PASO 1: Verificando el motor (Node.js)...

node -v >nul 2>&1
if %errorlevel% neq 0 (
    echo  [!] No encontré Node.js instalado.
    echo      Intentando un método de instalación rápida...
    echo.
    
    :: Comprobar si winget existe
    where winget >nul 2>&1
    if %errorlevel% == 0 (
        echo  [+] Instalando Node.js automáticamente via WINGET...
        winget install -e --id OpenJS.NodeJS --accept-package-agreements --accept-source-agreements >nul 2>&1
        if %errorlevel% == 0 (
            echo  [OK] ¡Listo! Por favor, CIERRA esta ventana y vuelve a abrir
            echo       el archivo "EJECUTAMEEEEEE" para empezar.
            pause
            exit
        )
    )

    :: Si llegamos aquí, falló winget o no existe
    echo  [X] No pude hacer la instalación automática.
    echo      Abriendo la página oficial para que lo descargues...
    echo.
    echo      Busca el botón que dice "LTS" o "Recomendado".
    echo.
    start https://nodejs.org/
    echo      Una vez instalado, vuelve a abrir este archivo.
    pause
    exit
) else (
    echo  [OK] Node.js ya está listo.
)

echo.
echo  --------------------------------------------------------------
echo  PASO 2: Verificando componentes internos...

if not exist "node_modules\" (
    echo  [!] Preparando los archivos del sitio por primera vez...
    echo      (Esto puede tardar un par de minutos, ten paciencia^)
    call npm install --no-fund --no-audit
    echo  [OK] ¡Componentes listos!
) else (
    echo  [OK] Los componentes ya están instalados.
)

echo.
echo  --------------------------------------------------------------
echo  PASO 3: Encendiendo el servidor de Nuditos...
echo.
echo  ==============================================================
echo.
echo   ¡TODO LISTO! 🚀
echo.
echo   PASO FINAL:
echo   Copia y pega la siguiente dirección en tu navegador (Chrome/Edge^):
echo.
echo   👉  http://localhost:3000
echo.
echo  ==============================================================
echo.
echo  (Presiona Ctrl+C para apagar la página cuando termines^)
echo.

call npm run dev

pause
