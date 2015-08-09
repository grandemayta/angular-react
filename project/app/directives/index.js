module.exports = function (app) {
    require("./HeaderBackButtonPanelDirective")(app);
    require("./SpinnerDirective")(app);
    require("./ErrorServerDirective")(app);
};