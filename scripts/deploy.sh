#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run doc:build

# copy demo to docs/.vuepress/dist
if test -e src/demo/dist
then
    rm -rf src/demo/dist
fi
cd src/demo
npm run build
cd -
cp -rf src/demo/dist docs/.vuepress/dist/demo
# navigate into the build output directory
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:webkong/vue-intersection-plugin.git master:gh-pages
cd -
