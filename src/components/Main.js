import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import Index from "../pages/Index"
import Show from "../pages/Show"

function Main(props) {
  const [contacts, setContacts] = useState([])

  const URL = "http://localhost:3001/contacts/"

  const getContacts = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    setContacts(data)
  }

  // INDUCES 
  const updateContacts = async (contact, id) => {
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(contact),
    })
    getContacts()
  }

  const createContacts = async (contact) => {
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(contact),
    })
    getContacts()
  }

  useEffect(() => getContacts(), [])

  return (
    <main>
      <Routes>
        <Route exact path="/" element={<Index contacts={contacts} createContacts={createContacts}/>} />
        <Route path="/contacts/:id" element={<Show contacts={contacts} updateContacts={updateContacts}/>} />
      </Routes>
  </main>
  )
}

export default Main