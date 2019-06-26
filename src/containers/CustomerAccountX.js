import { connect } from 'react-redux';
import _ from 'lodash';
import {
    deleteAccount,
} from '../actions/customerAccounts';
import {
    showEditAccountModal,
} from '../actions/editAccountModal';
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

    const accData = _.find(accounts, (data) => {
        return data.id === id;
    })

    return {
        accData,
        methodData: paymentMethods[accData.method],
        isSelected: accData.id === payment.account,
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        deleteAccountHandler: () => {
            dispatch(deleteAccount(ownProps.id));
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