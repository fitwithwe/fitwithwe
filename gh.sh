git add .
git commit -m "vercel json header"
git push -u origin main
yarn build
git commit -m "vercel json header"
git add dist -f
git commit -m "vercel json header"
git push -u origin main
git subtree push --prefix dist origin gh-pages