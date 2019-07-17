import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import PaymentOutlinedIcon from '@material-ui/icons/PaymentOutlined';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import { withStyles } from '@material-ui/core/styles';
import componentStyles from './styles';

class CustomerAccount extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isMenuOpen: false,
        anchorEl: null,
      }
      this.handleMenuClick = this.handleMenuClick.bind(this);
      this.handleMenuBlur = this.handleMenuBlur.bind(this);
    }

    handleMenuClick(e) {
      this.setState({
        isMenuOpen: !this.state.isMenuOpen,
        anchorEl: this.state.anchorEl ? this.state.anchorEl : e.target,
      })
    }

    handleMenuBlur() {
      this.setState({
        isMenuOpen: false,
        anchorEl: null,
      })      
    }

    render() {
      const {
        classes,
        accData,
        methodData,
        isSelected,
        showDeleteAccountConfirmationModalHandler,
        selectAccountHandler,
        showEditAccountModalHandler,
      } = this.props;

      const {
        isMenuOpen,
        anchorEl,
      } = this.state;

      return (
        <Paper
          className={`${classes.paper} ${classes.accountItem}`}
        >
          <div className={classes.markArea}>
            <Radio
              checked={isSelected}
              onClick={selectAccountHandler}
            />
          </div>
          <div className={classes.accDataArea}>
            <IconButton onClick={this.handleMenuClick} onBlur={this.handleMenuBlur} ref={(el) => this._menuButton = el} className={classes.menuOpenButton}>
              <MoreVertIcon />
            </IconButton>
            <Popper id={accData.id + '_popper'} anchorEl={anchorEl} open={isMenuOpen} placement='bottom-end' transition>
              {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                  <Paper>
                    <List className={classes.menuItems} component="nav" disablePadding >
                      <ListItem className={classes.menuItem} disableGutters button onClick={showEditAccountModalHandler}>
                        <ListItemIcon className={classes.menuItemIcon}>
                          <CheckIcon />
                        </ListItemIcon>
                        <ListItemText className={`${classes.menuItemText} ${classes.accTitleText}`} primary="Edit" />
                      </ListItem>
                      <ListItem className={classes.menuItem} disableGutters button onClick={showDeleteAccountConfirmationModalHandler}>
                        <ListItemIcon className={classes.menuItemIcon}>
                          <CloseIcon />
                        </ListItemIcon>
                        <ListItemText className={classes.menuItemText} primary="Delete" />
                      </ListItem>
                    </List>
                  </Paper>
                </Fade>
              )}
            </Popper>
            <h3 className={classes.accountTitle}>{accData.name}</h3>
            <p className={`${classes.accountDetails} ${classes.accountEmail}`}><MailOutlinedIcon className={classes.accountDetailsIcon} /><span className={classes.accountDetailsText}> {accData.email}</span></p>
            <p className={`${classes.accountDetails} ${classes.accountMethod}`}><PaymentOutlinedIcon className={classes.accountDetailsIcon} /><span className={classes.accountDetailsText}> <em>{methodData.label}</em></span></p>
          </div>
        </Paper>
      );
    }
  }
  
  export default withStyles(componentStyles)(CustomerAccount);