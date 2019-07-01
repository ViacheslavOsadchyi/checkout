import React, {Component} from 'react';

function feesDescription(WrappedComponent) {
    return class extends Component {
        render() {
            const {
                methodId,
                subtotal,
            } = this.props;

            let subtotalNum = parseFloat(subtotal);
            let descriptions;

            switch (methodId) {
                case "0":
                    descriptions = [{
                        label: 'Payment processing services 1%',
                        value: subtotalNum * 0.01,
                    }, {
                        label: 'VAT 21%',
                        value: subtotalNum * 1.01 * 0.21,

                    }];
                    break;
                case "1":
                    descriptions = [{
                        label: 'Payment processing services 1%',
                        value: subtotalNum * 0.01,                        
                    }];
                    break;
                default:
            }

            return <WrappedComponent feesDescription={descriptions} {...this.props} />;
        }
    }
}

export default feesDescription;