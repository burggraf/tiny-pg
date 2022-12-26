# init with:  wrangler pages project create
cd ./ui
npm run build && wrangler pages publish --project-name tiny-pg ./build
cd ..
