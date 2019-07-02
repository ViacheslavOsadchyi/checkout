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
                const prevFees = i ? arr.slice(0, i) : [feeData];
                const prevFeesSubtotal = i ? prevFees.reduce((currentSubtotal, currentFeeData) => {
                    return currentSubtotal *= (1 + parseFloat(currentFeeData.percents) / 100);
                }, subtotal) : subtotal;
                const feeTotal = Math.round((prevFeesSubtotal * (1 + parseFloat(feeData.percents) / 100) - prevFeesSubtotal) * 100) / 100;
                return {
                    label,
                    value: feeTotal,
                };
            });

            return <WrappedComponent feesDescription={descriptions} {...this.props} />;
        }
    }
}

export default feesDescription;