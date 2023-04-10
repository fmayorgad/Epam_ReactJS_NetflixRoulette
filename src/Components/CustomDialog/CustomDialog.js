import React from 'react';
import { createPortal } from 'react-dom';
import './CustomDialog.css';

export class CustomDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...props };
    }

    handleClick = (e) => {
        if (e.target.value !== this.state.selected) {
            this.setState((prev) => ({
                ...prev,
                selected: e.target.value
            }))
            this.state.onChange(e.target.value);
        }
    }

    render() {
        return (
            <>
                {this.state.openDialog && createPortal(
                    <div className='customDialogContainer'>
                        <div className='customDialogHeader'>
                            <div className='customDialogTitle'>
                                <h2>{this.state.title}</h2>
                            </div>
                            <button>
                                <svg class="closeDialogButton" focusable="false" aria-hidden="true" viewBox="0 0 24 24"><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
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
