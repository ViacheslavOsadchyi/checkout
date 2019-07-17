const styles = theme => ({
    buttonIcon: {
      marginRight: '5px',
    },
    actionButtons: {
      marginTop: '40px',
      [theme.breakpoints.down('sm')]: {
        padding: '0 20px',
      },
    }
});

export default styles;