import React, { useState, useEffect, useRef } from 'react';

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

    const textareaRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleReasonChange = (e) => {
        const selectedReason = e.target.value;
        setFormData({
            ...formData,
            reason: selectedReason,
            otherReason: selectedReason === 'other' ? '' : formData.otherReason
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Add your submit logic here
    };

    const handleTextareaInput = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto'; // Reset height to auto to calculate new height
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set height to scrollHeight
        }
    };

    useEffect(() => {
        handleTextareaInput(); // Initial resize for default value
    }, [formData.description]); // Run whenever description changes

    return (
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
                    style={{ overflow: 'hidden', resize: 'none' }} 
                />
            </div>

            <button type="submit">Submit</button>
        </form>
    );
};

export default ContactForm;
