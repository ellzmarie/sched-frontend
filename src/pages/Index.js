import { useState } from "react"
// import { Link } from "react-router-dom"

function Index(props) {
    // state to hold form data
    const [newForm, setNewForm] = useState({
        name: "",
        email: "",
        phone: "",
        desiredTime: "",
        amPm: "",
        timezone: ""
    })

    // handleChange function for form
    const handleChange = (event) => {
        setNewForm((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
            // [event.target.email]: event.target.value,
            // [event.target.phone]: event.target.value,
            // [event.target.desiredTime]: event.target.value,
            // [event.target.amPm]: event.target.value,
            // [event.target.timezone]: event.target.value,
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
            timezone: ""            
        })
    }

    const loaded = () => {
        return props.contacts.map((contact) => (
            <div key={contact._id} className="contact">
                <h2>Name: {contact.name}</h2>
                <h3>Email: {contact.email}</h3>
                <h3>Phone number: {contact.phone}</h3>
                <h3>Desired Time: {contact.desiredTime}</h3> 
                <h5>AM/PM: {contact.amPm}</h5> 
                <h5>Timezone: {contact.timezone}</h5>
            </div>
        ))
    }

    const loading = () => {
        return <h1>Loading...</h1>
    }
    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                value={newForm.name}
                name="name"
                placeholder="name"
                onChange={handleChange}
                />

                <input 
                type="text"
                value={newForm.email}
                email="email"
                placeholder="email"
                onChange={handleChange}
                />
                
                <input
                type="text"
                value={newForm.phone}
                phone="phone"
                placeholder="phone"
                onChange={handleChange}
                />

                <input 
                type="text"
                value={newForm.desiredTime}
                desiredTime="desiredTime"
                placeholder="time"
                onChange={handleChange}
                />

                <input 
                type="text"
                value={newForm.amPm}
                amPm="amPm"
                placeholder="AM/PM"
                onChange={handleChange}
                />

                <input
                type="text"
                value={newForm.timezone}
                timezone="timezone"
                placeholder="timezone"
                onChange={handleChange}
                />

                <input type="submit" value="Create Contact" />
            </form>
     
    {props.contacts ? loaded() : loading()}
    </section>

    )}

export default Index 