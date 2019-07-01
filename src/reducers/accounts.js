import _ from 'lodash';

import {
    CREATE_ACCOUNT_INSTANCE,
    EDIT_ACCOUNT_INSTANCE,
    DELETE_ACCOUNT_INSTANCE,
} from '../actions/customerAccounts';

const initialState = {
    "0": {
        id: "0",
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
        created_at: 1,
    }, 
    "1": {
        id: "1",
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
        created_at: 2,
    }, 
    "2": {
    id: "2",
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
    created_at: 3,
}};

export default function customerAccounts (state = initialState, action) {
    switch (action.type) {
        case CREATE_ACCOUNT_INSTANCE:
            return {
                ...state,
                [action.data.id]: action.data,
            };
        case DELETE_ACCOUNT_INSTANCE:
            return _.omit(state, action.id)
        case EDIT_ACCOUNT_INSTANCE:          
            return {
                ...state,
                [action.data.id]: action.data,
            };      
        default:
            return state;
    }
}