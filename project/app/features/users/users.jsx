var HelloMessage = React.createClass({
    render() {
        var prepareHtml = function (item) {
            return (
                <div className="card-content" key={item.id}>
                    <figure style={{backgroundImage: 'url(' + item.avatar_url + ')'}}></figure>
                    <h2>{item.login}</h2>
                    <i className="icon icon-chevron-right"></i>
                </div>
            );
        };
        return (
            <div>{this.props.data.map(prepareHtml)}</div>
        );
    }
});

module.exports = HelloMessage;