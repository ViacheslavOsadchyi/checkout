import { connect } from 'react-redux';
import _ from 'lodash';
import {
    deleteAccount,
} from '../actions/customerAccounts';
import CustomerAccount from '../components/CustomerAccount';

const mapStateToProps = (state, ownProps) => {
    const {
        accounts,
    } = state;

    const {
        id,
    } = ownProps;

    const accData = _.find(accounts, (data) => {
        return data.id === id;
    })

    return {
        accData,
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        deleteAccountHandler: () => {
            dispatch(deleteAccount(ownProps.id));
        }
    }
}

const CustomerAccountX = connect(
    mapStateToProps,
    mapDispatchToProps,
)(CustomerAccount);

export default CustomerAccountX;