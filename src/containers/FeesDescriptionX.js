import { connect } from 'react-redux';
import FeesDescription from '../components/FeesDescription';

const mapStateToProps = (state) => {
    const {
        payment,
        cart,
    } = state;

    return {
        methodId: payment.method,
        subtotal: cart.subtotal,
    }
}

const FeesDescriptionX = connect(
    mapStateToProps,
)(FeesDescription);

export default FeesDescriptionX;