import React from 'react'

const ContactForm = () => {
  const content = {
    title: 'Material Design Lite',
    article: 'lets you add a Material Design look and feel to your websites. It doesn’t rely on any JavaScript frameworks and aims to optimize for cross-device use, gracefully degrade in older browsers, and offer an experience that is immediately accessible. Get started now.'
  }

  return (
    <div>
      <form action="">
        <div className="input-wrapper">
          <label>Input text here</label>
          <input type="text" value="" name="" />
        </div>
        <div className="input-wrapper">
          <label>Input text here</label>
          <input type="text" value="" name="" />
        </div>
        <div className="input-wrapper">
          <label>Input text here</label>
          <textarea value="" name="" />
        </div>
        <button id="submit" className="btn-submit" type="submit">Submit</button>
      </form>
    </div>
  )
}


export default ContactForm