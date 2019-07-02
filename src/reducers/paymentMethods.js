
const initialState = {
    "0": {
        id: "0",
        name: "paypal",
        label: "PayPal",
        fees: ["0", "1"],
    },
    "1": {
        id: "1",
        name: "credit_card",
        label: "Credit Card",
        fees: ["0"]
    },
    "2": {
        id: "2",
        name: "ballance",
        label: "Ballance",
        fees: [],
    }
};

export default function paymentMethods (state = initialState) {
    return state;
}