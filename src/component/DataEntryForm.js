import React, { useState } from 'react';
import './DataEntryForm.css';

function DataEntryForm() {
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        address: '',
        address2: '',
        city: '',
        province: '',
        postalCode: '',
        agreeTerms: false
    });
    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData(formData);
    };

    return (
        <div className="data-entry-form-container">
            <h1>Data Entry Form</h1>
            <form onSubmit={handleSubmit} className="data-entry-form">
                {/* Email and Full Name */}

                <div className="form-row half-width">
                    <div className="form-group">
                        <label htmlFor="email" className="centered-label">Email</label>
                        <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name" className="centered-label">Name</label>
                        <input id="name" type="text" name="name" value={formData.name} onChange={handleChange} />
                    </div>
                </div>

                <div className="form-group full-width">
                    <label htmlFor="address" className="centered-label">Address</label>
                    <input id="address" type="text" name="address" value={formData.address} onChange={handleChange} />
                </div>

                <div className="form-group full-width">
                    <label htmlFor="address2" className="centered-label">Address 2</label>
                    <input id="address2" type="text" name="address2" value={formData.address2} onChange={handleChange} />
                </div>

                {/* City, Province, and Postal Code */}
                <div className="form-row fourth-row-container">
                    <div className="form-group fourth-row">
                        <label htmlFor="city" className="centered-label">City</label>
                        <input id="city" type="text" name="city" value={formData.city} onChange={handleChange} />
                    </div>
                    <div className="form-group fourth-row">
                        <label htmlFor="province" className="centered-label">Province</label>
                        <select id="province" name="province" value={formData.province} onChange={handleChange}>
                            <option value="">Choose...</option>
                            <option value="Alberta">Alberta</option>
                            <option value="British Columbia">British Columbia</option>
                            <option value="Manitoba">Manitoba</option>
                            <option value="New Brunswick">New Brunswick</option>
                            <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
                            <option value="Nova Scotia">Nova Scotia</option>
                            <option value="Ontario">Ontario</option>
                            <option value="Prince Edward Island">Prince Edward Island</option>
                            <option value="Quebec">Quebec</option>
                            <option value="Saskatchewan">Saskatchewan</option>

                        </select>
                    </div>
                    <div className="form-group fourth-row">
                        <label htmlFor="postalCode" className="centered-label">Postal Code</label>
                        <input id="postalCode" type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} />
                    </div>
                </div>

                {/* Agree Terms & Condition */}
                <div className="checkbox-group">
                    <input id="agreeTerms" type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} />
                    <label htmlFor="agreeTerms">Agree Terms & Condition?</label>
                </div>

                {/* Submit Button */}
                <div className="form-button">
                    <button type="submit" disabled={!formData.agreeTerms}>Submit</button>
                </div>
            </form>

            {/* Display submitted data */}
            {submittedData && (
                <div className="submitted-info">
                    <h2>Submitted Information</h2>
                    <p><strong>Email:</strong> {submittedData.email}</p>
                    <p><strong>Full Name:</strong> {submittedData.name}</p>
                    <p><strong>Address:</strong> {submittedData.address}</p>
                    <p><strong>Address 2:</strong> {submittedData.address2}</p>
                    <p><strong>City:</strong> {submittedData.city}</p>
                    <p><strong>Province:</strong> {submittedData.province}</p>
                    <p><strong>Postal Code:</strong> {submittedData.postalCode}</p>
                </div>
            )}
        </div>
    );
}

export default DataEntryForm;
