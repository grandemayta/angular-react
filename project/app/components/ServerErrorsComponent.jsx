var ServerErrorsComponent = React.createClass({

    render() {
        var status = this.props.status ? 'active' : 'deactive';
        return (
            <div className={status + " error-content"}>
                <div className="error-icon icon icon-chevron-down"></div>
                <div className="error-message">Oops something went wrong</div>
            </div>
        );
    }

});

module.exports = ServerErrorsComponent;