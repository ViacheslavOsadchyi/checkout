import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import componentStyles from './styles';

class MaterialTextField extends Component {
  render () {
    const {
      input,
      meta: {
        touched,
        error,
        warning,
      },
      classes,
    } = this.props;
    return (
    <div>
      <TextField
        {...this.props}
        value={input.value}
        onChange={input.onChange}
      />
      {touched &&
        ((error && <span className={classes.errorMessage}>! {error}</span>) ||
          (warning && <span className={classes.warn}>{warning}</span>))}
    </div>
    );
  }
}

export default withStyles(componentStyles)(MaterialTextField);