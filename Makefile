build-copy:
	rm -rf public
	mkdir -p dist/public

	cp -R functions dist/functions
	cp -R .nuxt dist/functions/nuxt
	cp -R .nuxt/dist/ dist/public/assets
	cp -R src/static/* dist/public

