import React from 'react';

const Register = () => {
    return (
        <div>
            <h2>Register</h2>
            <form>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" required />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
