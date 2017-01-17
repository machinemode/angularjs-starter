'use strict';
let gulp = require('gulp');
let sass = require('gulp-sass');
let Builder = require('systemjs-builder');

let buildStyles = (src, dest) => {
	let themes = `${__dirname}/src/lib/themes/`;
	let components = `${__dirname}/src/lib/components`;

	return new Promise((resolve, reject) => {
		gulp.src(src)
			.pipe(sass({
				outputStyle: 'compressed',
				includePaths: [ themes, components ]
			}))
			.on('error', reject)
			.pipe(gulp.dest(dest))
			.on('end', resolve);
	});
};

gulp.task('bundle', ['sass'], () => {
	let src = `${__dirname}/src/app/app-module`;
	let dest = `${__dirname}/dist/app.js`;
	let builder = new Builder(`${__dirname}`, `${__dirname}/systemjs.config.js`);

	return builder.buildStatic(src, dest, {	minify: true });
});

gulp.task('sass', [], () => {
	return buildStyles(`${__dirname}/src/app/styles/styles.scss`, `${__dirname}/dist`)
		//.then(() => buildStyles(`${__dirname}/src/lib/components/lib-module.scss`, `${__dirname}/dist`))
		.catch(console.error);
});

gulp.task('watch', ['sass'], () => {
	gulp.watch(`${__dirname}/src/**/*.scss`, ['sass']);
});
