#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn run doc:build

# copy demo to docs/.vuepress/dist
if test -e src/demo/dist
then
    rm -rf src/demo/dist
else
    cd src/demo
    yarn run build
    cd -
    cp -rf src/demo/dist docs/.vuepress/dist/demo
fi
# navigate into the build output directory
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:webaifei/vue-intersection-plugin.git master:gh-pages
cd -
