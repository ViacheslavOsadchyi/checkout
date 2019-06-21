import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  errorMessage: {
    color: theme.palette.error.main,
  },
  warn: {
    color: '#ffc107',
  }
});

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
        classame={classes.errorMessage}
      />
      {touched &&
        ((error && <span className={classes.errorMessage}>! {error}</span>) ||
          (warning && <span className={classes.warn}>{warning}</span>))}
    </div>
    );
  }
}

export default withStyles(styles)(MaterialTextField);