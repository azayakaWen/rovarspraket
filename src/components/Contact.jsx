import React, { useState } from "react"
import { useForm } from "@formcarry/react"
import "../style/Contact.css"

const Contact = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }))
  }

  // Call the "useForm" hook in your function component
  const { state, submit } = useForm({
    id: "Zb0hV8Lfxj",
  })

  // Success message
  if (state.submitted) {
    return (
      <div>
        <h1>Thank you! I received your submission!</h1>
        <form onSubmit={submit} className="contact-form">
          <div>
            <label htmlFor="name">Name</label>
          </div>
          <div>
            <input
              id="name"
              type="text"
              name="name"
              value={formValues.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
          </div>
          <div>
            <input
              id="email"
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
          </div>
          <div>
            <textarea
              className="message"
              id="message"
              name="message"
              value={formValues.message}
              onChange={handleChange}
            />
          </div>
          <div>
            <button className="send-btn" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div>
      <h1>Sosenondod mome a momailol!</h1>
      <form onSubmit={submit} className="contact-form">
        <div>
          <label htmlFor="name">Name</label>
        </div>
        <div>
          <input id="name" type="text" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
        </div>
        <div>
          <input id="email" type="email" name="email" />
        </div>
        <div>
          <label htmlFor="message">Message</label>
        </div>
        <div>
          <textarea className="message" id="message" name="message" />
        </div>
        <div>
          <button className="send-btn" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  )
}

export default Contact
