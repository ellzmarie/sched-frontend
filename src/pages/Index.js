// import { useState } from "react"
// import { Link } from "react-router-dom"

function Index(props) {
    const loaded = () => {
        return props.contacts.map((contact) => (
            <div key={contact._id} className="contact">
                <h2>Name: {contact.name}</h2>
                <h3>Email: {contact.email}</h3>
                <h3>Phone number: {contact.phone}</h3>
                <h3>Desired Times: {contact.desiredTimes} {contact.ampm} {contact.timezone}</h3>
            </div>
        ))
    }

    const loading = () => {
        return <h1>Loading...</h1>
    }
    return props.contacts ? loaded() : loading()
}

export default Index 