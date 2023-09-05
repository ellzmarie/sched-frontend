import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

function Show(props) {
    const { id } = useParams();
    const contact = props.contacts.find((contact) => contact._id === id)

    let navigate = useNavigate();

    const [editForm, setEditForm] = useState(contact)

    const handleChange = (event) => {
        setEditForm(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.updateContacts(editForm,contact._id);
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
            </div>
        </div>
    )
}

export default Show