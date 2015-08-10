var HelloMessage = React.createClass({

    handleClick (item, e) {
        this.props.test(item, e);
    },

    render() {
        var self = this;
        var prepareHtml = function (item) {
            return (
                <div onClick={self.handleClick.bind(this, item)} className="card-content" key={item.id}>
                    <figure style={{backgroundImage: 'url(' + item.avatar_url + ')'}}></figure>
                    <h2>{item.login}</h2>
                    <i className="icon icon-chevron-right"></i>
                </div>
            );
        }.bind(this);
        return (
            <div>{this.props.data.map(prepareHtml)}</div>
        );
    }

});

module.exports = HelloMessage;