var gulp = require('gulp');

var nodemon = require('gulp-nodemon');

gulp.task('default', function() {
    nodemon({
        script: 'app6.js',
        ext: 'js',
        env: {
            PORT: 8095
        },
        ignore: ['./node_modules/**', './bower_components/**']
    })
});

gulp