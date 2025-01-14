import React from 'react';
import 'cssx';

var ids = 0;
var getID = function (prefix) {
  return prefix + '-' + (++ids);
};

export default class CSSX extends React.Component {
  constructor(props) {
    super(props);

    let sheet = cssx(getID('cssx-styles'));
    let cssScopeId = getID('cssx-el');

    sheet.scope('#' + cssScopeId);

    this.state = { sheet, cssScopeId };
  }
  render() {    
    this.state.sheet.add(this.props.styles);
    return <div id={ this.state.cssScopeId }>{ this.props.children }</div>;
  }
};

CSSX.propTypes = {
  styles: React.PropTypes.array.isRequired
};