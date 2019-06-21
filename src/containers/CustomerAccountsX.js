import { connect } from 'react-redux';
import CustomerAccounts from '../components/CustomerAccounts';
import {
    showAddAccountModal,
} from '../actions/addAccountModal';

const mapStateToProps = (state, props) => {
    return {
        accounts: state.accounts,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddAccountClick: () => {
            dispatch(showAddAccountModal());
        }
    }
}

const CustomerAccountsX = connect(
    mapStateToProps,
    mapDispatchToProps,
)(CustomerAccounts);

export default CustomerAccountsX;