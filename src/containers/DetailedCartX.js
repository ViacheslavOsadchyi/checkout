import { connect } from 'react-redux';
import DetailedCart from '../components/DetailedCart';

const mapStateToProps = (state, props) => {
    const {
        cart,
        products,
        paymentMethods,
        fees,
        payment,
    } = state;

    const cartItems = cart.items.map(item => ({
            ...products[item.product],
            quantity: item.quantity,
    }));
    const itemsCount = cartItems.reduce((total, currentItem) => {
        return total + currentItem.quantity;
    }, 0);

    const methodFees = payment.method ? paymentMethods[payment.method].fees.map(id => fees[id]) : [];

    return {
        cartItems,
        itemsCount,
        subtotal: cart.subtotal,
        total: cart.total,
        methodFees,
    }
}

const DetailedCartX = connect(
    mapStateToProps,
)(DetailedCart);

export default DetailedCartX;