var gulp = require( 'gulp' );
var sass = require( 'gulp-ruby-sass' );

gulp.task( 'sass', function () {
    return sass( 'src/', {
        loadPath: [
            'bower_components/true/sass/_true.scss'
        ]
    } )
    .on( 'error', function ( error ) {
        console.error( 'Error!', error.message );
    } )
    .pipe( gulp.dest( 'dist/application.css' ) );
} );