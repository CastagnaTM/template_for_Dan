import React from 'react'
import Banner from './Banner'
import Navbar from './Navbar'
import Insta from '../Assets/insta_logo.png'

export default  class Contact extends React.Component {

    state = {
        name: '',
        email: '',
        subject: '',
        message: '',
        success: null,
        error: null
    }

    handleSubmit = (e) => {
        e.preventDefault();
        window.emailjs.send(
            'gmail', 'contact_form',
            {message_html: this.state.message, from_name: this.state.name,
            reply_to: this.state.email
            }
        ).then(response => {
            
        })
        .catch(err => console.log(err))
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
                        <form className='contact-form'>
                            <label >Your Name</label>
                            <input type="text" id="Name" name="name" placeholder="Your Name..." onChange={e => this.setState({ name: e.target.value })} value={this.state.name}></input>
                            <label hmtlfor="Email">Your Email</label>
                            <input type="text" id="Email" name="email" placeholder="example@email..." onChange={e => this.setState({ email: e.target.value }) }value={this.state.email}></input>
                            <label hmtlfor="Subject">Subject</label>
                            <input type="text" id="Subject" name="subject" placeholder="Subject..." onChange={e => this.setState({ subject: e.target.value })} value={this.state.subject}></input>
                            <label hmtlfor="Message">Message</label>
                            <textarea type="text" id="Message" name="message" placeholder="Message..." onChange={e => this.setState({ message: e.target.value })} value={this.state.message}></textarea>
                            <input type="submit" id="submit-button" value="Send" onClick={e => this.handleSubmit(e)}></input>
                        </form>
                        <div><p>{this.state.success ? "Thank you! We'll be in touch as soon as possible" : null}</p></div>
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
