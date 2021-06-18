import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const CustomModal = () => {
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [robot, setRobot] = useState('')
    const [show, setShow] = useState(false)
    const [response, setResponse] = useState(null)
    const subscribedUser = localStorage.getItem('subscribedUser')
    const noThanks = sessionStorage.getItem('noThanks')

    useEffect(
        () => {
            subscribedUser !== "true" && (!noThanks && showModal())
        }
    )

    const showModal = () => {
        let timer = setTimeout(() => setShow(true), 2000)
        return () => {
            clearTimeout(timer)
        }
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        const data = {
            email: email,
            fName: firstName,
            lName: lastName
        }

        const resp = await axios.post('https://dansunforgettablecreations.herokuapp.com/adduser', { data })
        if (resp.status === 200) {
            console.log(resp)
            localStorage.setItem('subscribedUser', true)
            setResponse('Thanks for subscribing!')
        } else {
            setResponse('Whoops, something dun broke!')
        }
    }

    const closeModal = () => {
        setShow(false)
        sessionStorage.setItem('noThanks', true)
    }

    const showMessage = () => {
        return(
            <div id="mc-response">{response}</div>
        )
    }

    const showForm = () => {
        return(
            <form 
                onSubmit={handleSubmit}
                id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate
                >
                <div className="mc-field-group">
                    <label htmlFor="mce-EMAIL">Email Address &nbsp;</label>
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
                <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_a25e5fe38d904b77f2888f0c2_c63f296bc2" tabIndex="-1" onChange={e => setRobot(e.target.value)} value={robot} /></div>
                <Button type="submit" variant="outline-primary" disabled={email.length < 3}>
                    Subscribe
                </Button>
            </form>
        )
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
                    { response ? showMessage() : showForm() }
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => closeModal()} >{response ? 'Close' : 'No Thanks'}</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CustomModal