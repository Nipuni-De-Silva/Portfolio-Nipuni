@echo off
set NODE_OPTIONS=--max-old-space-size=4096
echo Starting Next.js with increased memory (4GB)...
call npm run dev
