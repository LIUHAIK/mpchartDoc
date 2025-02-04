
pnpm run build
if errorlevel 1 (
    echo 构建失败！
    exit /b 1
)


pushd .vitepress/dist

if exist .git rmdir /s /q .git

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/LIUHAIK/mpchartDoc.git master:gh-pages

popd

echo OK
