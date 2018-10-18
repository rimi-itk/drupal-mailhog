var Encore = require('@symfony/webpack-encore');

Encore
    // directory where compiled assets will be stored
    .setOutputPath('build/')
    .setPublicPath('./')
    .setManifestKeyPrefix('build/')
    .addEntry('mailhog', './js/mailhog.js')
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    .enableSassLoader()
;

module.exports = Encore.getWebpackConfig();
