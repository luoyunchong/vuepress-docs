
cd docs/.vuepress/dist
git config --global user.email "luoyunchong@foxmail.com"
git config --global user.name "luoyunchong"
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:luoyunchong/vuepress-docs.git master:gh-pages
cd ../../../