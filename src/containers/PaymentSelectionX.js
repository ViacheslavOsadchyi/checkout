import { connect } from 'react-redux';
import PaymentSelection from '../components/PaymentSelection';
import { selectMethod } from '../actions/payment';

const mapStateToProps = (state, props) => {
    return {
        method: state.payment.method,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        selectPaymentHandler: (method) => {
            dispatch(selectMethod(method));
        }
    }
}

const PaymentSelectionX = connect(
    mapStateToProps,
    mapDispatchToProps,
)(PaymentSelection);

export default PaymentSelectionX;