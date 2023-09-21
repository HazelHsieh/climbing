#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
# echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -B main
git add .
git commit -m 'deploy'

# 下面兩段擇一開啟
#  1. 部屬到主線上
#  2. gh-pages
#  3. 原本git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages
#     修改成 HTTPS的網址 https://github.com/HazelHsieh/vue-vite.git

#  先取第二個

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main
# -f = 強制推送

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:HazelHsieh/climbing.git main:gh-pages

cd -
# 退出 離開視窗