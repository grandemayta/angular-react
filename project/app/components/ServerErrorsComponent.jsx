var ServerErrorsComponent = React.createClass({

    render() {
        return (
            <div className={this.props.status + " error-content"}>
                <div className="error-icon icon icon-chevron-down"></div>
                <div className="error-message">Oops something went wrong</div>
            </div>
        );
    }

});

module.exports = ServerErrorsComponent;