const styles = theme => ({
    gridContainer: {
      padding: theme.spacing.unit * 2,
    },
    buttonIcon: {
      marginRight: '5px',
    },
    actionButtons: {
      marginTop: '40px',
      [theme.breakpoints.down('sm')]: {
        padding: '0 20px',
      },
    },
    gridItem: {
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },      
    }
});

export default styles;