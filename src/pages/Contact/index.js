import React, { useState }  from 'react';

import { Local } from './style';

import emailjs from 'emailjs-com';

var initialState = {
  user_name: "",
  contact_number: "",
  message: "",
  user_email: "",
  reply_to: ""
};


export default function Contact() {

  var [
    { user_name, contact_number, message, user_email, reply_to },
    setState
  ] = useState(initialState);

  function handleClick(e) {
    const templateParams = {
        name: 'James',
        notes: 'Check this out!'
    };
    
    emailjs.send('gmail','template_o3b6491', templateParams, 'user_OveJFbrO3rFsnZFdG0YyA')
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
        }, (err) => {
          console.log('FAILED...', err);
        });
  }

  const onChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <Local>
      <h2>Fale Conosco</h2>
      <form id="form" submit={handleClick}>
        <div class="field">
          <label for="contact_number">contact_number</label>
          <input type="text" onChange={onChange} value={contact_number} name="contact_number" id="contact_number"/>
        </div>
        <div class="field">
          <label for="message">message</label>
          <input type="text" onChange={onChange} value={message} name="message" id="message"/>
        </div>
        <div class="field">
          <label for="user_name">user_name</label>
          <input type="text" onChange={onChange} value={user_name} name="user_name" id="user_name"/>
        </div>
        <div class="field">
          <label for="user_email">user_email</label>
          <input type="text" onChange={onChange} value={user_email} name="user_email" id="user_email"/>
        </div>
        <div class="field">
          <label for="reply_to">reply_to</label>
          <input type="text" onChange={onChange} value={reply_to} name="reply_to" id="reply_to"/>
        </div>

        <input type="submit" id="button" value="Send Email" />
      </form>
    </Local>
  );
}
