import React, { useState } from "react";

const Newsletter = () => {
    const [fetch, setEmail]= useState ('');
    const [message, setMessage] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            const { result, msg } = await fetch('https://hackbeanpot.us10.list-manage.com/subscribe/post?u=a98050d47fdae2481521f0474&amp;id=dccd8c8431');
    
            if (result !== 'success') {
              throw msg; //error with subscription from our end or plugin
            }
    
            setEmail('');
            setMessage('Thank you for subscribing!');
          } catch (err) {
            if (err.includes('already subscribed')) {
              setMessage("You're already subscribed!");
            } else {
              setMessage('Please enter a valid email.');
            }
          }
        };
    
        const handleEmailChange = e => {
            e.preventDefault();
            setEmail(e.target.value);
        };


return (
    <div>
        <form onSubmit={handleSubmit} className='footer__form'>
            <div>
                <div className="footer__form__heading">Join our newsletter!</div>
                <input
                    placeholder="Email address"
                    name="email"
                    type="text"
                    onChange={handleEmailChange}
                    className="footer__form__input"
                />
                <div className="footer__form__msg">{message}</div>

                <button className="primary-cta" type="submit">
                    Subscribe
                </button>
            </div>
        </form>
    </div>
);
};

export default Newsletter;
