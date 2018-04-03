import React from 'react';
import PropTypes from 'prop-types';

export default class CollapsibleString extends React.PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    characterCutOff: PropTypes.number,
    collapsibleStringIcons: PropTypes.shape({
      expand: PropTypes.any,
      collapse: PropTypes.any
    }).isRequired
  };

  static defaultProps = {
    characterCutOff: 50
  };

  constructor(props) {
    super(props);
    this.toggleCollapsed = this.toggleCollapsed.bind(this);
  }

  state = {
    collapsed: true
  };

  toggleCollapsed() {
    this.setState(state => ({ collapsed: !this.state.collapsed }));
  }

  render() {
    if (this.props.value.length < this.props.characterCutOff) {
      return <span>{this.props.value}</span>;
    } else if (!this.state.collapsed) {
      return (
        <span style={{ cursor: 'pointer' }} onClick={this.toggleCollapsed}>
          {this.props.collapsibleStringIcons.collapse} {this.props.value}
        </span>
      );
    } else {
      return (
        <span style={{ cursor: 'pointer' }} onClick={this.toggleCollapsed}>
          {this.props.collapsibleStringIcons.expand}
        </span>
      );
    }
  }
}
