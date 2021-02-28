import React, { useEffect, useState } from 'react'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const CustomModal = () => {
    const [show, setShow] = useState(false)
    const [email, setEmail] = useState('')
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
    // once we have a signup form to embed from mailchimp, set up async await here
    // Also can use this to set localstorgae
    const handleSubmit = (e) => {
        e.preventDefault();
        setShow(false)
        localStorage.setItem('subscribedUser', true)
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
                    Hey
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>This is a pop up</h4>
                <p>
                    Subscribe to our mailing list for reasons
                </p>
                <form className='contact-form'>
                    <label hmtlfor="Email">Your Email</label>
                    <input type="text" id="Email" name="email" placeholder="example@email..." onChange={e => setEmail(e.target.value)} value={email}></input>
                    <Button type="submit" variant="outline-primary" onClick={(e) => handleSubmit(e)}>
                        Send
                    </Button>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => closeModal()} >No Thanks</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CustomModal