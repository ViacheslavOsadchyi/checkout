import { connect } from 'react-redux';
import {
    showEditAccountModal,
} from '../actions/editAccountModal';
import {
    showDeleteAccountConfirmationModal,
} from '../actions/deleteAccountConfirmationModal';
import CustomerAccount from '../components/CustomerAccount';
import { selectAccount } from '../actions/payment';

const mapStateToProps = (state, ownProps) => {
    const {
        accounts,
        payment,
        paymentMethods,
    } = state;

    const {
        id,
    } = ownProps;

    const accData = accounts[id];

    return {
        accData,
        methodData: paymentMethods[accData.method],
        isSelected: accData.id === payment.account,
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        showDeleteAccountConfirmationModalHandler: () => {
            dispatch(showDeleteAccountConfirmationModal(ownProps.id));
        },
        selectAccountHandler: () => {
            dispatch(selectAccount(ownProps.id));
        },
        showEditAccountModalHandler: () => {
            dispatch(showEditAccountModal(ownProps.id));
        }
    }
}

const CustomerAccountX = connect(
    mapStateToProps,
    mapDispatchToProps,
)(CustomerAccount);

export default CustomerAccountX;