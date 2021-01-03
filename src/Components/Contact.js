import React from 'react'
import Banner from './Banner'
import Navbar from './Navbar'
import Insta from '../Assets/insta_logo.png'

export default class Contact extends React.Component {

    state = {
        name: '',
        email: '',
        message: '',
        status: null,
        error: null
    }

    handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:3002/send', {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        }).then(
            (response) => (response.json())
        ).then((response)=> {
            if (response.status === 'success') {
                this.setState({
                    status: "Thank you! We'll be in touch as soon as possible"
                })
            this.resetForm()
            } else if(response.status === 'fail') {
                this.setState({
                    status: "Whoops! There seems to have been an error. Please try again"
                })
            }
        })
    }

    resetForm(){
        this.setState({name: '', email: '', message: ''})
    }

    render() {
        return (
            <div className='component'>
                <Navbar />
                <Banner />
                <div className='header-container'>
                    <h1 className='component-header'>Contact</h1>
                </div>
                <div className='component-body'>
                    <div className='contact-column'>
                        <form className='contact-form' onSubmit={e => this.handleSubmit(e)} method="POST">
                            <label >Your Name</label>
                            <input type="text" id="Name" name="name" placeholder="Your Name..." onChange={e => this.setState({ name: e.target.value })} value={this.state.name}></input>
                            <label hmtlfor="Email">Your Email</label>
                            <input type="text" id="Email" name="email" placeholder="example@email..." onChange={e => this.setState({ email: e.target.value }) }value={this.state.email}></input>
                            <label hmtlfor="Message">Message</label>
                            <textarea type="text" id="Message" name="message" placeholder="Message..." onChange={e => this.setState({ message: e.target.value })} value={this.state.message}></textarea>
                            <input type="submit" id="submit-button" value="Send" ></input>
                        </form>
                        <div><p style={{ color: "aliceblue"}}>{this.state.status}</p></div>
                        <div className='contact-link'>
                            <a href='https://www.instagram.com/dansunforgettablecreations/' target='_blank' rel="noopener noreferrer"> Follow Dan's Unforgettable Creations! &nbsp;
                                <img className='contact-logo' style={{marginBottom: '-5px'}} src={Insta} alt="Instagram Logo"></img>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}
