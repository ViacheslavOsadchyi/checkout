import _ from 'lodash';

import {
    CREATE_ACCOUNT,
    EDIT_ACCOUNT,
    DELETE_ACCOUNT,
} from '../actions/customerAccounts';

const initialState = [{
    id: 0,
    name: 'Kusturiza d.i.o',
    email: 'email1@gmail.com',
    address: '',
    method: '1',
    cardData: {
        number: '12121212121212',
        expDate: '12/18',
        cvv: '123',
    },
    paypalData: {
        number: null,
    },
    bank: 'Siq banka',
}, {
    id: 1,
    name: 'Kusturiza d.i.o',
    email: 'email2@gmail.com',
    address: '',
    method: '0',
    cardData: {
        number: null,
        expDate: null,
        cvv: null,
    },
    paypalData: {
        number: 'paypal@kusturiza.cz',
    },
    bank: 'PayPal',
}, {
    id: 2,
    name: 'Kusturiza d.i.o',
    email: 'email3@gmail.com',
    address: '',
    method: '2',
    cardData: {
        number: null,
        expDate: null,
        cvv: null,
    },
    paypalData: {
        number: 'paypal@kusturiza.cz',
    },
    bank: 'PayPal',
}]

export default function customerAccounts (state = initialState, action) {
    // let stateCopy = state.slice();
    switch (action.type) {
        case CREATE_ACCOUNT:
            return [
                ...state,
                action.data,
            ];
        case DELETE_ACCOUNT:
            const index = _.findIndex(state, (accData) => {
                return accData.id === action.id;
            });
            return [
                ...state.slice(0, index),
                ...state.slice(index+1)
            ]
        case EDIT_ACCOUNT:
            const accIndex = _.findIndex(state, ['id', action.id]);

            return state.map((item,index) => {
                if (index !== accIndex) {
                    return item;
                }

                return {
                    ...item,
                    ...action.data,
                }
            });       
        default:
            return state;
    }
}