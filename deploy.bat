@echo off
REM build and generate sitemap
call npm run deploy

REM ensure sitemap.xml won't cause merge conflicts
git config merge.ours.driver true
echo public/sitemap.xml merge=ours>>.gitattributes

REM stage all changes (including sitemap)
git add .

REM pull latest from source/master
git pull source master

REM commit your changes
git commit -m "update" || echo "No changes to commit."

REM push to remote master
git push -u source master
