import React, {Component} from 'react';

function feesDescription(WrappedComponent) {
    return class extends Component {
        render() {
            const {
                methodFees,
                subtotal,
            } = this.props;


            const feesDescription = methodFees.map((feeData) => {
                const {
                    label,
                    percents,
                } = feeData;
                const value = subtotal * (parseFloat(percents) / 100);
                return {
                    label,
                    value,
                }
            });

            return <WrappedComponent feesDescription={feesDescription} {...this.props} />;
        }
    }
}

export default feesDescription;