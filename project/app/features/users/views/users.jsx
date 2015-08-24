var Spinner = require("../../../components/SpinnerComponent.jsx");
var ServerErrors = require("../../../components/ServerErrorsComponent.jsx");


var UserDetailView = React.createClass({

    userDetail (item, e) {
        this.props.fnUserDetail(item, e);
    },

    render() {
        var self = this;
        var prepareHtml = function (item) {
            return (
                <div onClick={self.userDetail.bind(this, item)} className="card-content" key={item.id}>
                    <figure style={{backgroundImage: 'url(' + item.avatar_url + ')'}}></figure>
                    <h2>{item.login}</h2>
                    <i className="icon icon-chevron-right"></i>
                </div>
            );
        }.bind(this);
        return (
            <div className="view-content">
                <Spinner status={this.props.spinnerStatus}/>
                <ServerErrors status={this.props.serverStatus}/>
                {this.props.users.map(prepareHtml)}
            </div>
        );
    }

});

module.exports = UserDetailView;