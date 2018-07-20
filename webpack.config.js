var Encore = require('@symfony/webpack-encore');
const CopyWebpackPlugin = require('copy-webpack-plugin');

Encore
// the project directory where all compiled assets will be stored
    .setOutputPath('public/build/')
    // the public path used by the web server to access the previous directory
    .setPublicPath('/build')
    .addEntry('rep_log', './assets/js/rep_log.js')
    .addEntry('login', './assets/js/login.js')
    .addEntry('layout', './assets/js/layout.js')
    .enableBuildNotifications()
    // fixes modules that expect jQuery to be global
    .autoProvidejQuery()
    .enableSassLoader()
    .enableSourceMaps(!Encore.isProduction())
    .addPlugin(new CopyWebpackPlugin([
        {
            from: './assets/static', to: 'static'
        }
    ]))
;


// create hashed filenames (e.g. app.abc123.css)
// .enableVersioning()

// allow sass/scss files to be processed
// .enableSassLoader()

// export the final configuration
module.exports = Encore.getWebpackConfig();