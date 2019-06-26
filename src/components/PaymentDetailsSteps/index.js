import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class PaymentDetailsSteps extends Component {
    render() {
        const {
            currentStep
        } = this.props;

        return (
            <Tabs
                value={currentStep}
            >
                <Tab
                    disableRipple
                    value="accounts"
                    label="01 CUSTOMER ACCOUNT"
                    disabled={currentStep!=='accounts'}
                />
                <Tab
                    disableRipple
                    value="methods"
                    label="02 PAYMENT SELECTION"
                    disabled={currentStep!=='methods'}
                />
            </Tabs>
        );
    }
}

export default PaymentDetailsSteps;