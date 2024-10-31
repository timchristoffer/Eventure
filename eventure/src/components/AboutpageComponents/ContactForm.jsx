import React, { useState, useEffect, useRef } from 'react';
import './Aboutpage.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        reason: '',
        otherReason: '',
        description: '',
    });
    const [showPopup, setShowPopup] = useState(false);
    const textareaRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleReasonChange = (e) => {
        const selectedReason = e.target.value;
        setFormData(prevData => ({
            ...prevData,
            reason: selectedReason,
            otherReason: selectedReason === 'other' ? '' : prevData.otherReason
        }));
    };

    const handleTextareaInput = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    };

    useEffect(() => {
        handleTextareaInput();
    }, [formData.description]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        setShowPopup(true);

        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            reason: '',
            otherReason: '',
            description: '',
        });

        setTimeout(() => {
            setShowPopup(false);
        }, 3000);
    };

    return (
        <div>
            <div className="aboutUsRightContent">
                <h2>Contact Us</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>First Name:</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label>Last Name:</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label>Email Address:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label>Phone Number:</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label>Reason for Contact:</label>
                        <select name="reason" value={formData.reason} onChange={handleReasonChange} required>
                            <option value="">Select a reason</option>
                            <option value="support">Support</option>
                            <option value="feedback">Feedback</option>
                            <option value="inquiry">General Inquiry</option>
                            <option value="job application">Job Application</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    {formData.reason === 'other' && (
                        <div>
                            <label>Please specify:</label>
                            <input
                                type="text"
                                name="otherReason"
                                value={formData.otherReason}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    )}

                    <div>
                        <label>Description:</label>
                        <textarea
                            ref={textareaRef}
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            onInput={handleTextareaInput}
                            required
                        />
                    </div>

                    <button type="submit">Submit</button>
                </form>

                {showPopup && (
                    <div className="contactUsSubmitPopupBox">
                        Form submitted successfully!
                    </div>
                )}
            </div>
        </div>
    );
};

export default ContactForm;
