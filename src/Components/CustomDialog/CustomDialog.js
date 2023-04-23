import React from 'react';
import { createPortal } from 'react-dom';
import './CustomDialog.css';

export class CustomDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...props };
    }

    handleClick = () => {
        this.state.handleAction(false);
    }

    render() {
        return (
            <>
                {this.state.openDialog && createPortal(
                    <div className='customDialogContainer'>
                        <div className='customDialogHeaderContainer'>
                            <div className='customDialogTitle'>
                                <h2>{this.state.title}</h2>
                            </div>
                            <button className="closeDialogButton" onClick={this.handleClick}>
                                <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                                    <path color="white" fill="white" strokeWidth="0.01" stroke="white" d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                                </svg>
                            </button>
                        </div>
                        <div className='customDialogContent'>
                            {this.state.children && this.state.children}
                        </div>
                    </div>
                    ,
                    document.body
                )}
            </>
        );
    }
}
