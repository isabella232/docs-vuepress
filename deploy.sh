#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
push-dir --dir=docs/.vuepress/dist --branch=gh-pages --cleanup
