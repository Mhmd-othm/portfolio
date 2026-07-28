@echo off
setlocal

set "TARGET_DIR=%1"
if "%TARGET_DIR%"=="" set "TARGET_DIR=%CD%"
set "OUTPUT_FILE=directory_structure.txt"

if not exist "%TARGET_DIR%" (
    echo Error: Directory "%TARGET_DIR%" does not exist.
    pause
    exit /b 1
)

echo Scanning %TARGET_DIR%...
echo Directory: %TARGET_DIR% > "%OUTPUT_FILE%"
echo. >> "%OUTPUT_FILE%"

:: Use TREE command (simplest and most reliable)
tree "%TARGET_DIR%" /F /A >> "%OUTPUT_FILE%"

echo.
echo Done! Structure saved to %OUTPUT_FILE%
type "%OUTPUT_FILE%"
pause