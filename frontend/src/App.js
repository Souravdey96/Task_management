import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';
import Register from './Components/register';
import Login from './Components/login';
import Dashboard from './Components/dashboard';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <div className="App">
                    <Routes>
                        <Route 
                            path="/" 
                            element={
                                <>
                                    <h1>Welcome to the Task Management App!</h1>
                                    <Login />
                                    <Register />
                                </>
                            } 
                        />
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Routes>
                </div>
            </Router>
        </AuthProvider>
    );
};

export default App;
