- package.json
	- scripts
	- dependencies
		- features packages
			- core
			- common
			- compiler
			- router
			- platform-browser
			- platform-browser-dynamic
			- http
		- polyfills
			- core-js
			- rxjs
			- reflect-metadata
			- zone.js
	- dev dependencies
		- typescript
		- typings
		- webpack
		- webpack-dev-server
		- ts-loader
		- html-webpack-plugin
		
- tsconfig.json
	- compilerOptions
		- target 
		- emitDecoratorMetadata
		- experimentalDecorators
		
- webpack.config.js
	- require webpack
	- require html-webpack-plugin
	- module exports
		- entry
		- output
			- path
			- filename
		- module	
			- loaders[]
				- test
				- loader
		- resolve
			- extensions[]
		plugins[]
			- html-webpack-plugin
				- template

				
- tsconfig.json
- typings.json


- index.html
- app/app.component.ts
	- import component
	- component decorator
		- module.id
		- selector
		- template
	- export component class
	
- app/app.module.ts
	- import NgModule from core
	- import BrowserModule from platform-browser
	- import App Component
	- declare NgModule decorator
		- exports
		- imports
		- declarations
		- providers
		- bootstrap
	- export module class
	
- main.ts
	- import reflect-metadata
	- import zone.js/dist/zone
	- import platformBrowserDynamic from platform-browser-dynamic
	- import app module
	- platformBrowserDynamic.bootstrap(appModule)
	
