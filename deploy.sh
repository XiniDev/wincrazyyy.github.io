#!/bin/bash

# exit immediately if any command fails
set -e

cd "$(dirname "$0")"

# build and generate sitemap
npm run deploy

# ensure sitemap.xml won't cause merge conflicts
git config merge.ours.driver true
echo "public/sitemap.xml merge=ours" >> .gitattributes

# stage all changes (including sitemap)
git add .

# pull latest from remote
git pull source master

# commit your changes
git commit -m "update"

# push to remote
git push -u source master
