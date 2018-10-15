var Encore = require('@symfony/webpack-encore');

Encore
    // directory where compiled assets will be stored
    .setOutputPath('build/')
    .setPublicPath('./')
    .setManifestKeyPrefix('build/')
    .addEntry('mailhogger', './js/mailhogger.js')
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    .enableSassLoader()
;

module.exports = Encore.getWebpackConfig();
