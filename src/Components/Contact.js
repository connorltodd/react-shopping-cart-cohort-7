import React from 'react';

export default function Contact () {
    const [contactInfo, setContactInfo] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });
    const [formResponseMessage, setFormResponseMessage] = React.useState('')


    const handleChange = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value;
        
        // console.log('element which is being used', event.target)
        // console.log('input name', event.target.name);
        // console.log('input value', event.target.value);

        const newContactInfo = {
            ...contactInfo,
            [inputName]: inputValue
        }
        setContactInfo(newContactInfo)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if(contactInfo.firstName.length <= 6 || contactInfo.password.length <= 6) {
            setFormResponseMessage('You are missing the password or email requirements')
        } else {
            setFormResponseMessage('Form submitted successfully')
        }
    }

    return (
        <div>
            <p>Contact us</p>
            <form onSubmit={handleSubmit}>
                 <input 
                    name='firstName' 
                    placeholder='first name' 
                    value={contactInfo.firstName} 
                    onChange={handleChange} 
                />
                <input 
                    name='lastName' 
                    placeholder='last name' 
                    value={contactInfo.firstName} 
                    onChange={handleChange} 
                />
                <textarea 
                    name='message' 
                    placeholder='write your message here' 
                    value={contactInfo.message} 
                    onChange={handleChange} 
                />
                <p>{formResponseMessage}</p>
                <button type="submit" >Submit</button>
            </form>
        </div>
    )
}