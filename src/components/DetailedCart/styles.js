const styles = theme => ({
    cartTitleSection: {
        marginBottom: '30px',
    },
    cartTitle: {
        paddingBottom: '10px',
    },
    cartTitleHeader: {
        fontSize: '24px',
    },
    itemsCountBadge: {
        minWidth: '30px',
        lineHeight: '30px',
        backgroundColor: theme.palette.primary.main,
        borderRadius: '100%',
        color: '#fff',
        textAlign: 'center',
    },
    cartItems: {
        marginBottom: '30px',
    },
    cartItem: {
        marginBottom: '20px',
    },
    cartItemTitle: {
        fontSize: '1em',
        fontWeight: 'inherit',
        margin: 'auto',
    },
    cartItemSubtitle: {
        color: theme.palette.grey['600'],
        margin: '5px 0',
    },
    cartItemPrice: {
        color: theme.palette.grey['600'],
        fontWeight: '700',
        margin: '10px 0 0'
    },
    summary: {
        marginTop: '20px',
        color: theme.palette.grey['600'],
    },
    totalRow: {
        color: '#000',
    },
    summaryValue: {
        fontWeight: '700',
    },
    summaryRow: {
        marginTop: '15px',
    }
})

export default styles;