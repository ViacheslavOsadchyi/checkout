
const initialState = {
    "0": {
        id: "0",
        name: "paypal",
        label: "PayPal",
    },
    "1": {
        id: "1",
        name: "credit_card",
        label: "Credit Card",
    },
    "2": {
        id: "2",
        name: "ballance",
        label: "Ballance",
    }
};

export default function paymentMethods (state = initialState) {
    return state;
}