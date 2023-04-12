import React from 'react';
import './MovieForm.css';

export class MovieForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...props };
    }

    handleSubmit = () => {
        this.state.handleAction(false);
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmmit}>
                    <div className='movieFormContainer'>
                        <div className='movieFormRow'>
                            <div className='movieFormFieldContainerLarge'>
                                <label htmlFor='title'>TITLE</label>
                                <input id='title' type='text' placeholder='What do you want to watch' />
                            </div>

                            <div className='movieFormFieldContainerSmall'>
                                <label htmlFor='releaseDate'>RELEASE DATE</label>
                                <input id='releaseDate' type='date' placeholder='Select a date' />
                            </div>
                        </div>

                        <div className='movieFormRow'>
                            <div className='movieFormFieldContainerLarge'>
                                <label htmlFor='title'>MOVIE URL</label>
                                <input id='title' type='text' placeholder='https://..' />
                            </div>

                            <div className='movieFormFieldContainerSmall'>
                                <label htmlFor='rating'>RATING</label>
                                <input id='rating' type='number' max="10" min="1" placeholder='from 1 to 10' />
                            </div>
                        </div>

                        <div className='movieFormRow'>
                            <div className='movieFormFieldContainerLarge'>
                                <label htmlFor='genre'>GENRE SELECTOR</label>
                                <select name="genre" id="genre" value={this.state.selected}>
                                    {/*   {this.state.options.map(opt => <option key={opt.id} value={opt.id}>{opt.desc}</option>)}*/}
                                </select>
                            </div>

                            <div className='movieFormFieldContainerSmall'>
                                <label htmlFor='runtime'>RUNTIME</label>
                                <input id='runtime' type='runtime' placeholder='Minutes' />
                            </div>
                        </div>

                        <div className='movieFormRow'>
                            <div className="textareaContainer">
                                <label htmlFor='genre'>MOVIE DESCRIPTION</label>
                                <textarea name="textarea" rows="10" palceholder="Description"></textarea>
                            </div>

                        </div>

                    </div>
                    <div className='movieFormButtonsContainer'>
                        <button type='button'>RESET</button>
                        <button type='submit' value='Submit'>SUBMIT</button>
                    </div>
                </form>
            </>
        );
    }
}
