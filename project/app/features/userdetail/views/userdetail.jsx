var Spinner = require("../../../components/SpinnerComponent.jsx");
var ServerErrors = require("../../../components/ServerErrorsComponent.jsx");

var UserDetailComponent = React.createClass({

    userRepositories () {
        this.props.fnUserRepositories();
    },

    render() {
        return (
            <div className="view-content">
                <Spinner status={this.props.spinnerStatus}/>
                <ServerErrors status={this.props.serverStatus}/>
                <div>
                    <figure style={{backgroundImage: 'url(' + this.props.user.avatar_url + ')'}} className="img-md-center"></figure>
                    <h2 className="label-center">Nickname</h2>
                    <p className="text-center">{this.props.user.login}</p>
                    <h2 className="label-center">Fullname</h2>
                    <p className="text-center">{this.props.user.name}</p>
                    <h2 className="label-center">Email</h2>
                    <p className="text-center">{this.props.user.email}</p>
                    <h2 className="label-center">Followers</h2>
                    <p className="text-center">{this.props.user.followers}</p>
                    <button onClick={this.userRepositories} className="btn btn-md btn-lightblue">
                        Repositories
                    </button>
                </div>
            </div>
        );
    }

});

module.exports = UserDetailComponent;