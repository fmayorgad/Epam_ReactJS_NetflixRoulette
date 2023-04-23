import React from 'react';
import './MovieForm.css';

export class MovieForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title ?? '',
            date: props.date ? props.date : '',
            url: props.url ? props.url : '',
            rating: props.rating ? props.rating : '',
            genre: props.genre ? props.genre : [],
            runtime: props.runtime ? props.runtime : '',
            description: props.description ? props.description : '',
            onSubmit: props.onSubmit
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.state.onSubmit(this.state);
    }

    handleDateChange = (event) => {
        this.setState({ ...this.state, date: event.target.value });
    }

    handleChangeSelectGenre = (event) => {
        let options = Array.from(event.target.options);
        let selected = options
            .filter(o => o.selected)
            .map(o => o.value);

        this.setState({ ...this.state, genre: selected });
    }

    handleInputChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    };

    render() {
        return (
            <>
                <form className='movieFormContainer' onSubmit={this.handleSubmit}>
                    <div >
                        <div className='movieFormRow'>
                            <div className='movieFormFieldContainerLarge'>
                                <label htmlFor='title'>TITLE</label>
                                <input id="title" type="text" value={this.state.title} placeholder='What do you want to watch' onChange={this.handleInputChange} />
                            </div>

                            <div className='movieFormFieldContainerSmall'>
                                <label htmlFor='date'>RELEASE DATE</label>
                                <input id="date" onChange={this.handleDateChange} value={this.state.date} type='date' placeholder='Select a date' />
                            </div>
                        </div>

                        <div className='movieFormRow'>
                            <div className='movieFormFieldContainerLarge'>
                                <label htmlFor='url'>MOVIE URL</label>
                                <input id="url" type="text" value={this.state.url} placeholder='https://..' onChange={this.handleInputChange} />
                            </div>

                            <div className='movieFormFieldContainerSmall'>
                                <label htmlFor='rating'>RATING</label>
                                <input id="rating" type="number" value={this.state.rating} max="10" min="1" placeholder='from 1 to 10' onChange={this.handleInputChange} />
                            </div>
                        </div>

                        <div className='movieFormRow'>
                            <div className='movieFormFieldContainerLarge'>
                                <label htmlFor='genre'>GENRE SELECTOR</label>
                                <select name="genre" id="genre" onChange={this.handleChangeSelectGenre} multiple>
                                    <option key="1" value="1">Crime</option>
                                    <option key="2" value="2">Documentary</option>
                                    <option key="3" value="3">Horror</option>
                                    <option key="4" value="4">Comedy</option>
                                </select>
                            </div>

                            <div className='movieFormFieldContainerSmall'>
                                <label htmlFor='runtime'>RUNTIME</label>
                                <input id='runtime' type='runtime' data-testid="genreselector" value={this.state.runtime} placeholder='Minutes' onChange={this.handleInputChange} />
                            </div>
                        </div>

                        <div className='movieFormRow'>
                            <div className="textareaContainer">
                                <label htmlFor='descriptionText'>MOVIE DESCRIPTION</label>
                                <textarea name="description" id="descriptionText" rows="10" value={this.state.description} palceholder="Description" data-testif='description' onChange={this.handleInputChange} />
                            </div>
                        </div>

                    </div>
                    <div className='movieFormButtonsContainer'>
                        <button className='outlineButton' type='button'>RESET</button>
                        <button type='submit'>SUBMIT</button>
                    </div>
                </form>
            </>
        );
    }
}
