import React from 'react';
import './SortControl.css';

export class SortControl extends React.Component {
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
            <div className='SortControlContainer'>
                <label htmlFor="sortControl">SORT BY</label>
                <select name="sortBy" id="sortControl" value={this.state.selected} onChange={(e) => this.handleClick(e)}>
                    {this.state.options.map(opt => <option key={opt.id} value={opt.id}>{opt.desc}</option>)}
                </select>
            </div>
        );
    }
}
