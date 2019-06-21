import { connect } from 'react-redux';
import {
    setActiveTab,
} from '../actions/payment';
import { PaymentDetails } from '../components';

const mapStateToProps = state => {
    const {
        payment,
    } = state;

    return {
        activeTab: payment.activeTab,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        tabChangeHandler: (tab) => {
            dispatch(setActiveTab(tab));
        }
    }
}

const PaymentDetailsX = connect(
    mapStateToProps,
    mapDispatchToProps,
)(PaymentDetails);

export default PaymentDetailsX;