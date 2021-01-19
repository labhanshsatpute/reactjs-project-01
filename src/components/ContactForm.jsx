import React, { useState } from 'react';

function ContactForm() {

    const [nameWarning, newNameWarning] = useState(" ");

    const [emailWarning, newEmailWarning] = useState(" ");

    const [phoneWarning, newPhoneWarning] = useState(" ");

    const [messageWarning, newMessageWarning] = useState(" ");

    const FormValidation = (e) => {
        e.preventDefault();

        // Variable Declaration
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let phone = document.getElementById('phone').value;
        let message = document.getElementById('message').value;

        // Mail Format
        const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        
        // Name Validation
        if (name == "") {
            newNameWarning(" Please Enter Name ");
        }
        else if (name.length < 5) {
            newNameWarning(" Please Enter a Valid Name ");
        }
        else {
            newNameWarning(" ");
        }

        // Email Validation
        if (email == "") {
            newEmailWarning(" Please Enter Email ");
        }
        else if (!email.match(mailFormat)) {
            newEmailWarning(" Please Enter a Valid Email ");
        }
        else {
            newEmailWarning(" ");
        }

        // Phone Validation
        if (phone == "") {
            newPhoneWarning(" Please Enter Phone No. ");
        }
        else if (phone.length < 10 || phone.length > 10) {
            newPhoneWarning(" Pnease enter a Valid Phone No. ");
        }
        else {
            newPhoneWarning(" ");
        }

        // Message Validation
        if (message == "") {
            newMessageWarning(" Please Enter Something ");
        }
        else if (message.length < 50) {
            newMessageWarning(" Please Enter More Than 50 Characters ");
        }
        else {
            newMessageWarning(" ");
        }

    }

    return (
        <React.Fragment>
            <form className="form-group text-left" id="contact-form" onSubmit={FormValidation}>

                <label htmlFor="name" className="text-color-01 d-inline-block">Name</label>
                <label className="text-danger d-inline-block mx-2 float-right">{nameWarning}</label>
                <input type="text" id="name" className="input-group-text text-box text-left w-100" placeholder="Enter Your Name"/>
                <br/>

                <label htmlFor="email" className="text-color-01 d-inline-block">Email</label>
                <label className="text-danger d-inline-block mx-2 float-right" id="email-warning">{emailWarning}</label>
                <input type="email" id="email" className="input-group-text text-box text-left w-100" placeholder="Enter Email"/>
                <br/>

                <label htmlFor="phone" className="text-color-01 d-inline-block">Phone</label>
                <label className="text-danger d-inline-block mx-2 float-right" id="phone-warning">{phoneWarning}</label>
                <input type="number" id="phone" className="input-group-text text-box text-left w-100" placeholder="Enter Phone"/>
                <br/>

                <label htmlFor="message" className="text-color-01 d-inline-block">Message</label>
                <label className="text-danger d-inline-block mx-2 float-right" id="message-warning">{messageWarning}</label>
                <textarea name="message" id="message" rows="3" placeholder="Enter Message" className="input-group-text text-box text-left w-100 inner-wrap"></textarea>
                <br/>

                <button type="Submit" value="submit" className="btn btn-lg button-color-2">Submit</button>
            </form>
        </React.Fragment>
    );
};

export default ContactForm;