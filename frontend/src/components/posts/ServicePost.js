import React, { Component } from 'react'

class ServicePost extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            date:'',
            location: '',
            description: '',
            type: 'Yoga Training',
            count:0
        }
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleLocationChange = (event) => {
        this.setState({
            location: event.target.value
        })
    }
    handleDescriptionChange = (event) => {
        this.setState({
            description: event.target.value
        })
    }
    handleTypeOfEventChange = (event) => {
        this.setState({
            type: event.target.value
        })
    }

    handleSubmit = event => {
         
    }

    render() {

        return (
            <div>
                <div>
                    <h3>
                        Post a Service Here
                    </h3>
                </div>
                <form onSubmit = {this.handleSubmit}>
                    <div>
                        <label>Name of the service provider</label>
                        <input type='text' value={this.state.name} onChange={this.handleNameChange} />
                    </div>

                    <div>
                        <label>Select the event which do you want to organize</label>
                        <select value={this.state.type} onChange={this.handleTypeOfEventChange}>
                            <option value="yoga training">Yoga Training</option>
                            <option value="personal training">Personal training</option>
                            <option value="haircut tutorial">Haircut Tutorial</option>
                        </select>
                    </div>
                    <div>
                        <label>Date</label>
                        <input type='text' value={this.state.date} onChange={ e => this.setState({date:e.target.value})} />
                    </div>
                    <div>
                        <label>Location of Event</label>
                        <input type='text' value={this.state.location} onChange={this.handleLocationChange} />
                    </div>
                    <div>
                        <label>Describe the Event</label>
                        <textarea value={this.state.description} onChange={this.handleDescriptionChange}></textarea>
                    </div>
                    <div>
                        <label>Total number of allowed people</label>
                        <input type='text' value= {this.state.count} onChange={e => this.setState({count:e.target.value})}/>
                    </div>

                    <button type="submit">Post this event</button>
                    <button>Cancel</button>

                </form>

            </div>

        )
    }
}

export default ServicePost