
const initialState = {
    fees: {
        "0": {
            id: "0",
            name: "comission",
            label: "Payment processing services 1%",
            percents: "1",
        },
        "1": {
            id: "1",
            name: "vat",
            label: "VAT 21%",
            percents: "21",
        },
    },
    paymentMethods: {
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
            fees: ["1"]
        },
        "2": {
            id: "2",
            name: "ballance",
            label: "Ballance",
            fees: [],
        }
    },
    products: {
        "0": {
            id: "0",
            title: 'Glith',
            subtitle: 'Christian Louboutin',
            price: 200
        }, 
        "1": {
            id: "1",
            title: 'Bianca',
            subtitle: 'Christian Louboutin',
            price: 200
        },
    }
};

export default function entities (state = initialState) {
    return state;
}