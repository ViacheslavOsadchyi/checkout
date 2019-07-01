import React, { Component } from 'react';

class FeesDescription extends Component {
    render() {
      const {
        methodId,
        subtotal,
      } = this.props;

      const messages = [];

      return (
        <div className="feesDescription">
            {methodId}
        </div>
      );
    }
  }
  
  export default FeesDescription;