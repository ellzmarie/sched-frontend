import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

function Show(props) {
    const { id } = useParams();
    const contact = props.contacts.find((contact) => contact._id === id)

    let navigate = useNavigate();

    const [editForm, setEditForm] = useState(contact)

    const handleChange = (event) => {
        setEditForm((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.updateContacts(editForm, contact._id);
        navigate("/");
    };

    // const removeContacts = () => {
    //     props.deleteContacts(contact._id);
    //     navigate("/")
    // }

    return (
        <div className="contact-show">
            <div className="show-info">
            <h1>Confirmed!</h1>
            <h4>We'll reach out to confirm your appointment.</h4>

            <form onSubmit={handleSubmit}>
                <p><input
                type="text"
                value={editForm.name}
                name="name"
                required
                placeholder="name"
                onChange={handleChange}
                /></p>

                <p><input 
                type="text"
                value={editForm.email}
                name="email"
                required
                placeholder="email"
                onChange={handleChange}
                /></p>

                <p><input
                type="text"
                value={editForm.phone}
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
                value={editForm.desiredTime} //&& {newForm.amPm} && {newForm.timezone}}
                name="desiredTime"
                required
                placeholder="time"
                onChange={handleChange}
                />

                <input 
                type="text"
                value={editForm.amPm}
                name="amPm"
                required
                placeholder="am/pm"
                onChange={handleChange}
                />

               <input
                type="text"
                value={editForm.timezone}
                name="timezone"
                required
                placeholder="timezone"
                onChange={handleChange}
                />
                </p>

                <input type="submit" value="Update Contact" />
            </form>



            </div>
        </div>
    )
}

export default Show