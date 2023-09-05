import { React, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

function Index(props) {
    // state to hold form data
    const [newForm, setNewForm] = useState({
        name: "",
        email: "",
        phone: "",
        desiredTime: "",
        amPm: "",
        timezone: "",
        notes: ""
    })

    let navigate = useNavigate();

    // handleChange function for form
    const handleChange = (event) => {
        setNewForm((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }))
    }

    // handle submit function for form
    const handleSubmit = (event) => {
        event.preventDefault()
        props.createContacts(newForm)

        setNewForm({
            name: "",
            email: "",
            phone: "",
            desiredTime: "",
            amPm: "",
            timezone: "",
            notes: ""            
        })
        navigate("/")
    }

    // const loaded = () => {
    //     return props.contacts.map((contact) => (
    //         <div key={contact._id} className="contact">
    //             <h2>Name: {contact.name}</h2>
    //             <h3>Email: {contact.email}</h3>
    //             <h3>Phone number: {contact.phone}</h3>
    //             <h3>Desired Time: {contact.desiredTime}</h3> 
    //             <h5>AM/PM: {contact.amPm}</h5> 
    //             <h5>Timezone: {contact.timezone}</h5>
    //         </div>
    //     ))
    // }

    // const loading = () => {
    //     return <h1>Loading...</h1>
    // }
    return (
        <section className="create-contact">
            <form onSubmit={handleSubmit}>
                First and Last Name: 
                <p><input
                type="text"
                value={newForm.name}
                name="name"
                required
                placeholder="name"
                onChange={handleChange}
                /></p>

                <p>Email:</p> 
                <p><input 
                type="text"
                value={newForm.email}
                name="email"
                required
                placeholder="email"
                onChange={handleChange}
                /></p>

                <p>Phone:</p> 
                <p><input
                type="text"
                value={newForm.phone}
                name="phone"
                required
                placeholder="(XXX)XXX-XXXX"
                onChange={handleChange}
                /></p>

                <p>
                Enter a time (I'd like this to be a drop down menu): 
                </p>
                <p><input 
                type="text"
                value={newForm.desiredTime} //&& {newForm.amPm} && {newForm.timezone}}
                name="desiredTime"
                required
                placeholder="time"
                onChange={handleChange}
                />

                <input 
                type="text"
                value={newForm.amPm}
                name="amPm"
                required
                placeholder="am/pm"
                onChange={handleChange}
                />

               <input
                type="text"
                value={newForm.timezone}
                name="timezone"
                required
                placeholder="timezone"
                onChange={handleChange}
                />
                </p>

                <p>
                Please enter the organization you're associated with and any details that will help us prepare for our meeting:
                </p>
                <p>
                <textarea 
                type="text"
                row={6}
                value={newForm.notes}
                name="notes"
                placeholder="enter notes"
                onChange={handleChange}
                />
                </p>

                <input type="submit" value="Create Contact" />
            </form>
     
    {/* {props.contacts ? loaded() : loading()} */}
    </section>

    )}

export default Index 