var React = require('react');
var foundationApi = require('../utils/foundation-api');

class ActionSheet extends React.Component {
  state = {active: false};

  setActiveState = (active) => {
    this.setState({active: active});
  };

  onBodyClick = (e) => {
    var el = e.target;
    var insideActionSheet = false;

    do {
      if(el.classList && el.classList.contains('action-sheet-container') && el.id === this.props.id) {
        insideActionSheet = true;
        break;
      }

    } while ((el = el.parentNode));

    if(!insideActionSheet) {
      this.setActiveState(false);
    }
  };

  componentDidMount() {
    if(this.props.id) {
      foundationApi.subscribe(this.props.id, function (name, msg) {
        if (msg === 'open') {
          this.setState({active: true});
        } else if (msg === 'close') {
          this.setState({active: false});
        } else if (msg === 'toggle') {
          this.setState({active: !this.state.active});
        }
      }.bind(this));
    }
    document.body.addEventListener('click', this.onBodyClick);
  }

  componentWillUnmount() {
    if(this.props.id) foundationApi.unsubscribe(this.props.id);
    document.body.removeEventListener('click', this.onBodyClick);
  }

  render() {
    var children = React.Children.map(this.props.children, function (child, index) {
      var extraProps = {active: this.state.active};
      if (child.type.displayName === 'ActionSheetButton') {
        extraProps.setActiveState = this.setActiveState;
      }
      return React.cloneElement(child, extraProps);
    }.bind(this));
    return (
      <div id={this.props.id} data-closable={true} className='action-sheet-container'>
        {children}
      </div>
    );
  }
}

module.exports = ActionSheet;
ActionSheet.Button = require('./button');
ActionSheet.Content = require('./content');
