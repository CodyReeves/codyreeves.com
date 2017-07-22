import React from 'react'

const ContactForm = () => {

  return (
    <div>
      <form action="">
        <div className="input-wrapper">
          <label>Name</label>
          <input type="text" value="" name="" />
        </div>
        <div className="input-wrapper">
          <label>Email</label>
          <input type="text" value="" name="" />
        </div>
        <div className="input-wrapper">
          <label>Start the Conversation</label>
          <textarea value="" name="" />
        </div>
        <small>Please Note: It may take a up to two days to recieve a reply.</small>
        <button id="submit" className="btn-submit" type="submit">Submit</button>
      </form>
    </div>
  )
}


export default ContactForm