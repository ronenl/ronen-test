import React, { Component } from 'react';
import PropTypes from 'prop-types';
import utils from '../utils/utils';

class CoolTextArea extends Component {
    constructor(props) {
        super(props);

        this.onKeyUp = this.onKeyUp.bind(this);

        this.state = {
            currentRows: props.minrows
        };
    }

     onKeyUp(e) {
         if (e.target.value === '') {
             this.resetInput();
         } else {
             this.calculateRows(e.target);
         }
    }

    calculateRows(textarea) {
        const {currentRows} = this.state;
        const {maxrows} = this.props;
        const currentRow = utils.countLines(textarea);
        if (currentRows < maxrows && currentRow >= currentRows) {
            this.setState({
                currentRows: currentRows + 1
            });
        }
    }

    resetInput() {
        this.setState({
            currentRows: this.props.minrows
        });
    }

    render() {
        const {currentRows} = this.state;
        return (
            <textarea
                onKeyUp={this.onKeyUp}
                rows={currentRows} />
        );
    }
}

CoolTextArea.propTypes = {
    minrows: PropTypes.number,
    maxrows: PropTypes.number
};

export default CoolTextArea;