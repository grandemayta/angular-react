module.exports = function (app) {
    require("./SnapMenuService")(app);
    require("./RestService")(app);
    require("./AnimationsService")(app);
    require("./ReactService")(app);
};