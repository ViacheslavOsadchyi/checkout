import React, {Component} from 'react';

function feesDescription(WrappedComponent) {
    return class extends Component {
        render() {
            const {
                methodFees,
                subtotal,
            } = this.props;

            const descriptions = methodFees.map((feeData, i ,arr) => {
                const {
                    label,
                } = feeData;
                const prevFees = i ? arr.slice(0, i + 1) : [feeData];
                const total = prevFees.reduce((currentSubtotal, currentFeeData) => {
                    return currentSubtotal += currentSubtotal * (parseFloat(currentFeeData.percents) / 100);
                }, subtotal);
                const feeTotal = Math.round((total - subtotal) * 100) / 100;
                return {
                    label,
                    value: feeTotal,
                }
            });

            return <WrappedComponent feesDescription={descriptions} {...this.props} />;
        }
    }
}

export default feesDescription;