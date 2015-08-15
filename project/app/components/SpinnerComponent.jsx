var SpinnerComponent = React.createClass({

    render() {
        return (
            <div className={this.props.status + " spinner-content"}>
                <div className="three-quarters-loader"></div>
            </div>
        );
    }

});

module.exports = SpinnerComponent;