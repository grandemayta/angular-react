var SpinnerComponent = React.createClass({

    render() {
        var status = this.props.status ? 'active' : 'deactive';
        return (
            <div className={status + " spinner-content"}>
                <div className="three-quarters-loader"></div>
            </div>
        );
    }

});

module.exports = SpinnerComponent;