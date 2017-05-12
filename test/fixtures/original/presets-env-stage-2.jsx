export default class Text {

    static displayName = 'Text';

    static propTypes = {
        'content': 'React.PropTypes.string.isRequired'
    };

    render () {

        return <span className="text">{this.props.content}</span>;

    }

}
