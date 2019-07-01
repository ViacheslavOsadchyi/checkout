import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import componentStyles from './styles';

class MaterialSelect extends Component {
  render () {
    const {
      input,
      meta: {
        touched,
        error,
        warning,
      },
      classes,
      children,
      custom,
    } = this.props;

    return (
    <FormControl className={classes.materialSelectFC}>
        {custom && custom.label && <InputLabel>{custom.label}</InputLabel>}
        <Select
            {...custom}
            {...input}
        >
            {children}
        </Select>
      {touched &&
        ((error && <span className={classes.errorMessage}>! {error}</span>) ||
          (warning && <span className={classes.warn}>{warning}</span>))}
    </FormControl>
    );
  }
}

export default withStyles(componentStyles)(MaterialSelect);