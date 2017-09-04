import React, { Component } from 'react';
import $ from 'jquery';
// Contact component render contact form
class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactEmail: '',
      contactMessage: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeMsg = this.handleChangeMsg.bind(this);
  }

  // Change state of input field so text is updated while typing
  handleChange(e) {
    this.setState({
      contactEmail: e.target.value,
    });
  }
  // Change state of input field so text is updated while typing
  handleChangeMsg(e) {
    this.setState({
      contactMessage: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      contactEmail: '',
      contactMessage: '',
    });

    $.ajax({
      url: process.env.NODE_ENV !== 'production' ? '/getMail' : './php/mailer.php',
      type: 'POST',
      data: {
        form_email: this.state.contactEmail,
        form_msg: this.state.contactMessage,
      },
      cache: false,
      success: function (data) {
        // Success..
        this.setState({
          contactEmail: 'Success!',
          contactMessage: 'Message Sent!',
        });
        $('#formContact').slideUp();
        $('#formContact').after(this.state.contactMessage);
        console.log('success', data);
      }.bind(this),
      // Fail..
      error: function (xhr, status, err) {
        console.log(xhr, status);
        console.log(err);
        this.setState({
          contactEmail: 'Uh Oh!',
          contactMessage: 'Sorry something went wrong!\nPlease send you message to:\n\nhello@codyreeves.design\n',
        });
        console.log(`${this.state.contactEmail + this.state.contactMessage}fail`);
      }.bind(this),
    });
  }

  render() {
    return (
      <div className="contact-form" id="contact">
        <div className="filter">
          <form className="form" onSubmit={this._handleSubmit} id="formContact">
            <div className="input-wrapper">
              <label htmlFor="formEmail">Email</label>
              <input
                id="formEmail"
                type="email"
                name="formEmail"
                value={this.state.contactEmail}
                onChange={this._handleChange}
                required
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="formMsg">Message</label>
              <textarea
                id="formMsg"
                name="formMsg"
                rows="8"
                cols="40"
                value={this.state.contactMessage}
                onChange={this._handleChangeMsg}
                required
              />
            </div>
            <small>Please Note: It may take a up to two days to recieve a reply.</small>
            <input className="btn-submit" type="submit" value="Submit" id="btn-submit" />
          </form>
        </div>
      </div>
    );
  }
}


export default ContactForm;
