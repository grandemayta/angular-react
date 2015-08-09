module.exports = function (app) {

    require("../features/partials/headermenucontent")(app);
    require("../features/users")(app);
    require("../features/userdetail")(app);
    require("../features/userrepositories")(app);

};