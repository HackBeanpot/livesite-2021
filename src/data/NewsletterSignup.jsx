import React, { useState } from "react";
import addToMailChimp from "gatsby-plugin-mailchimp";

const NewsletterSignup = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async e => {
      e.preventDefault();

      try {
        const { result, msg } = await addToMailChimp(email);

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
                    <div className="footer__form-heading">Join our newsletter!</div>
                    <input
                        placeholder="Email address"
                        name="email"
                        type="text"
                        onChange={handleEmailChange}
                        className="footer__form-input"
                    />
                    <div className="footer__form-msg">{message}</div>

                    <button type="button" className="btn primary-cta">
                        Subscribe
                    </button>
                </div>
            </form>
        </div>
    );
};

export default NewsletterSignup;