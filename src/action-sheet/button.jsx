var React = require('react');

class ActionSheetButton extends React.Component {
  static displayName = "ActionSheetButton";

  toggle = () => {
    this.props.setActiveState(!this.props.active);
  };

  render() {
    var Title = null;
    if (this.props.title.length > 0) {
      Title = <a className='button'>{this.props.title}</a>;
    }
    return (
      <div onClick={this.toggle}>
        { Title }
        <div>{this.props.children}</div>
      </div>
    );
  }
}

module.exports = ActionSheetButton;
