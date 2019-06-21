import { connect } from 'react-redux';
import {
    hideAddAccountModal,
} from '../actions/addAccountModal';
import {
    addAccount,
} from '../actions/customerAccounts';
import { AddAccountModal } from '../components';

const mapStateToProps = state => {
    return {
        addAccountModalShow: state.addAccountModal,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleClose: () => {
            dispatch(hideAddAccountModal());
        },
        handleAdd: (data) => {
            dispatch(addAccount(data));
        }
    }
}

const AddAccountModalX = connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddAccountModal);

export default AddAccountModalX;