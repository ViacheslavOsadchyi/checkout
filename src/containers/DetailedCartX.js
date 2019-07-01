import { connect } from 'react-redux';
import DetailedCart from '../components/DetailedCart';

const mapStateToProps = (state, props) => {
    const {
        cart,
        products,
        payment,
    } = state;

    const cartItems = cart.items.map(item => ({
            ...products[item.product],
            quantity: item.quantity,
    }));
    const itemsCount = cartItems.reduce((total, currentItem) => {
        return total + currentItem.quantity;
    }, 0);

    return {
        cartItems,
        itemsCount,
        subtotal: cart.subtotal,
        total: cart.total,
        methodId: payment.method,
    }
}

const DetailedCartX = connect(
    mapStateToProps,
)(DetailedCart);

export default DetailedCartX;