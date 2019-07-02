import { connect } from 'react-redux';
import {
    hideAddAccountModal,
} from '../actions/addAccountModal';
import {
    createAccountInstance,
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
            dispatch(createAccountInstance(data));
        }
    }
}

const AddAccountModalX = connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddAccountModal);

export default AddAccountModalX;