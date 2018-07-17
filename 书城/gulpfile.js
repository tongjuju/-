var gulp = require('gulp');

var server = require('gulp-webserver');

var fs = require('fs');

var path = require('path');

var url = require('url');

gulp.task('server', function() {
    gulp.src(server({
        port: 9000,
        middleware: function(req, res, next) {
            var pathname = url.parse(req.url).pathname;
            if (pathname === '/favicon.ico') {
                return false;
            }
            if (/\/api/g.test(pathname)) {
                res.end(JSON.stringify(moke(req.url)))
            } else {
                pathname = pathname === '/' ? '/index.html' : pathname;
                res.end(fs.readFileSync(path.join(__dirname, 'src', pathname)))
            }
        }
    }))
});