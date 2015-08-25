var Spinner = require("../../../components/SpinnerComponent.jsx");
var ServerErrors = require("../../../components/ServerErrorsComponent.jsx");


var UserRepositoriesComponent = React.createClass({

    render() {
        var self = this;
        var prepareHtml = function (item) {
            return (
                <div className="list-view-02" key={item.id}>
                    <div className="list-view-02-label-tiny">{item.created_at}</div>
                    <div className="list-view-02-label-large">{item.name}</div>
                    <div className="list-view-02-label-small">{item.language}</div>
                </div>
            );
        }.bind(this);
        return (
            <div className="view-content">
                <Spinner status={this.props.spinnerStatus}/>
                <ServerErrors status={this.props.serverStatus}/>
                {this.props.repositories.map(prepareHtml)}
            </div>
        );
    }

});

module.exports = UserRepositoriesComponent;