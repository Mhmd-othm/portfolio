@echo off
title Startar Portfolio Lokalt
echo ==================================================
echo   Startar lokal webbserver pa http://localhost:3000
echo   (Detta loser YouTubes inbaddningsfel Fel 153)
echo ==================================================
echo.
start http://localhost:3000
python -m http.server 3000
if %errorlevel% neq 0 (
  npx --yes serve -l 3000 .
)
pause
