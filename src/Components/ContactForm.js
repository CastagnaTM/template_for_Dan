import React from 'react'
import Banner from './Banner'
import Navbar from './Navbar'
import Insta from '../Assets/insta_logo.png'

export default class ContactForm extends React.Component {

    state = {
        name: '',
        email: '',
        message: '',
        success: null,
        error: null
    }

    handleSubmit = async(e) => {
        e.preventDefault();
        const sendEmail = () => {
            window.emailjs.send(
                'default_service', 'template_83wcj',
                {message_html: this.state.message, from_name: this.state.name,
                reply_to: this.state.email
                }
            )
        }
        if(this.state.name && this.state.email && this.state.message){
            try {
                await window.emailjs.send(
                    'default_service', 'template_83wcjjt',
                    {
                        message_html: this.state.message, from_name: this.state.name,
                        reply_to: this.state.email
                    }
                )
                this.setState({
                    success: "Thank you! We'll be in touch as soon as possible",
                    name: '',
                    email: '',
                    message: '',
                })
            } catch (error) {
                console.log(error)
                this.setState({
                    success: "Sorry, something went wrong! Please get in touch with us at dan@dansunforgettablecreations.com"
                })
            }
        } else {
            this.setState({
                success: "*Please fill out all of the above fields"
            })
        }   
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
                            <label hmtlfor="Message">How can we make your event unforgettable?</label>
                            <textarea type="text" id="Message" name="message" placeholder="Let us know..." onChange={e => this.setState({ message: e.target.value })} value={this.state.message}></textarea>
                            <input type="submit" id="submit-button" value="Send" onClick={e => this.handleSubmit(e)}></input>
                        </form>
                        <div id="form-response"><p>{this.state.success}</p></div>
                        <div className='contact-link'>
                            <a href='https://www.instagram.com/dansunforgettablecreations/' target='_blank' rel="noopener noreferrer"> Follow Us! &nbsp;
                                <img className='contact-logo' style={{marginBottom: '-5px'}} src={Insta} alt="Instagram Logo"></img>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}