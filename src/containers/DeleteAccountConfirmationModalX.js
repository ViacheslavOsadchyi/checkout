import { connect } from 'react-redux';
import {
    hideDeleteAccountConfirmationModal,
    deleteAccountFromModal,
} from '../actions/deleteAccountConfirmationModal';
import { DeleteAccountConfirmationModal } from '../components';

const mapStateToProps = state => {
    const {
        deleteAccountConfirmationModal: {
            isVisible,
            accountId,
        },
        accounts,
        paymentMethods,
    } = state;

    const accountData = accountId ? Object.assign({}, accounts[accountId]): null;
    if (accountData) {
        accountData.method = paymentMethods[accountData.method];
    }

    return {
        isVisible,
        accountData,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleClose: () => {
            dispatch(hideDeleteAccountConfirmationModal());
        },
        handleDelete: (accountId) => {
            dispatch(deleteAccountFromModal(accountId));
        }
    }
}

const DeleteAccountConfirmationModalX = connect(
    mapStateToProps,
    mapDispatchToProps,
)(DeleteAccountConfirmationModal);

export default DeleteAccountConfirmationModalX;