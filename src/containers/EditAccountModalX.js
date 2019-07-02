import { connect } from 'react-redux';
import {
    hideEditAccountModal,
} from '../actions/editAccountModal';
import {
    editAccount,
} from '../actions/customerAccounts';
import { EditAccountModal } from '../components';

const mapStateToProps = state => {
    const {
        isVisible,
        accountId,
    } = state.editAccountModal;

    return {
        isVisible,
        accountId,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleClose: () => {
            dispatch(hideEditAccountModal());
        },
        handleSave: (data) => {
            dispatch(editAccount(data));
        }
    }
}

const EditAccountModalX = connect(
    mapStateToProps,
    mapDispatchToProps,
)(EditAccountModal);

export default EditAccountModalX;