const styles = theme => ({
    paper: {
      padding: theme.spacing.unit * 3,
      paddingLeft: '68px',
      paddingRight: '50px',
      position: 'relative',
    },
    markArea: {
      position: 'absolute',
      top: '50%',
      left: '10px',
      transform: 'translate(0,-50%)',
    },
    menuOpenButton: {
      position: 'absolute',
      top: 6,
      right: 6,
    },
    menuItems: {
      padding: 0,
    },
    menuItem: {
      padding: '5px 10px',
      display: 'flex',
      alignItems: 'center',
    },
    accountTitle: {
      fontSize: 16,
      margin: '3px 0 12px',
      marginTop: '-3px',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden', 
    },
    accountDetailsText: {
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',      
    },
    accountDetails: {
      fontSize: 15,
      margin: '10px 0',
      display: 'flex',
      alignItems: 'center',
    },
    accountMethod: {
      marginBottom: 0,
    },
    accountDetailsIcon: {
      marginRight: '10px',
      fontSize: '18px',
      color: theme.palette.grey['600'],
    },
    menuItemText: {
      padding: 0,
    },
    accountItem: {
        width: '160px',
        [theme.breakpoints.down('sm')]: {
          width: 'auto',
        },  
    }
  }
);

export default styles;