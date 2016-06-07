var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('webserver', function() {
    browserSync({
        server: {
            baseDir: "./Build/"
        }
    });
});

gulp.task('default', ['webserver']);