@echo off
REM build and generate sitemap
call npm run deploy

REM stage all changes (including sitemap)
git add .

REM pull latest from source/master
git pull source master

REM commit your changes
git commit -m "update"

REM push to remote master
git push -u source master
