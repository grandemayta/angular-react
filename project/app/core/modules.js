module.exports = function (app) {

    require("../features/partials/headermenucontent/config")(app);
    require("../features/users/config")(app);
    require("../features/userdetail/config")(app);
    require("../features/userrepositories/config")(app);

};