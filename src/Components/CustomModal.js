import React, { useEffect, useState } from 'react'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const CustomModal = () => {
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const[robot, setRobot] = useState('')
    const [show, setShow] = useState(false)
    const subscribedUser = localStorage.getItem('subscribedUser')
    const noThanks = sessionStorage.getItem('noThanks')

    useEffect(
        () => {
            subscribedUser !== "true" && (!noThanks && showModal())
        }, []
    )

    const showModal = () => {
        let timer = setTimeout(() => setShow(true), 2000)
        return () => {
            clearTimeout(timer)
        }
    }

    // WHOOPS gonna have to hook up to a server after all

    // once we have a signup form to embed from mailchimp, set up async await here
    // Also can use this to set localstorage
    const handleSubmit = async(e) => {
        e.preventDefault();
        const data = {
            email: email,
            fName: firstName,
            lName: lastName
        }
        const sub = fetch ('https://dansunforgettablecreations.us1.list-manage.com/subscribe/post?u=a25e5fe38d904b77f2888f0c2&amp;id=c63f296bc2', {
            method: 'POST',
            body: data
        })

        try {
            const resp = await sub()
            console.log(resp)
        } catch (error) {
            console.log(error)
        }

        // setShow(false)
        // localStorage.setItem('subscribedUser', true)
    }

    const closeModal = () => {
        setShow(false)
        sessionStorage.setItem('noThanks', true)
    }

    return (
        <Modal
            aria-labelledby='contained-modal-title-vcenter'
            centered
            show={show}
        >
            <Modal.Header>
                <Modal.Title id='contained-modal-title-vcenter'>
                    Join our mailing list for special offers!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div id="mc_embed_signup">
                    <form 
                        // action="https://dansunforgettablecreations.us1.list-manage.com/subscribe/post?u=a25e5fe38d904b77f2888f0c2&amp;id=c63f296bc2" 
                        // method="post" 
                        onSubmit={(e) => handleSubmit(e)}
                        id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate
                    >
                        <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
                        <div className="mc-field-group">
                            <label htmlFor="mce-EMAIL">Email Address &nbsp; <span className="asterisk">*</span>
                            </label>
                            <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" onChange={e => setEmail(e.target.value)} value={email}
                            />
                        </div>
                        <div className="mc-field-group">
                            <label htmlFor="mce-FNAME">First Name &nbsp;</label>
                            <input type="text" name="FNAME" className="" id="mce-FNAME" onChange={e => setFirstName(e.target.value)} value={firstName}/>
                        </div>
                        <div className="mc-field-group">
                            <label htmlFor="mce-LNAME">Last Name &nbsp;</label>
                            <input type="text" name="LNAME" className="" id="mce-LNAME" onChange={e => setLastName(e.target.value)} value={lastName}/>
                        </div>
                        <div id="mce-responses" className="clear">
                            <div className="response" id="mce-error-response" style={{display:'none'}}></div>
                            <div className="response" id="mce-success-response" style={{display:'none'}}></div>
                        </div>
                        <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_a25e5fe38d904b77f2888f0c2_c63f296bc2" tabIndex="-1" onChange={e => setRobot(e.target.value)} value={robot} /></div>
                        <Button type="submit" variant="outline-primary" disabled={email.length < 3}>
                            Subscribe
                        </Button>
                    </form>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => closeModal()} >No Thanks</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CustomModal