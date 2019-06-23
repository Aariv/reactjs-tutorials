import React from 'react';

const Spinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">
                {props.message}
            </div>
        </div>
    );
}

// default values if we don't provide value in the props from root element
Spinner.defaultProps = {
    message: 'Loading.....'
}

export default Spinner;