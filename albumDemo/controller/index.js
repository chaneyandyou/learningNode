const albumRouter = require('./album');
module.exports = function (app) {
    app.use('/',albumRouter);
}