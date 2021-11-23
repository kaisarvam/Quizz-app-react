import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar'
import Footer from '../Shared/Footer/Footer'
import useAuth from '../../../Hooks/useAuth';

const Home = () => {
    const {admin} = useAuth();
    return (
        <>
        <Navbar/>
        <div>
            <h1>This is home Page</h1>
        {
            !(admin)&&  <NavLink to="/TakeTest"><button className="btn btn-success">Go to test ... </button></NavLink>
        }

        {
            (admin)&&  <NavLink to="/dashbord"><button className="btn btn-success">Go Dashbord... </button></NavLink>
        }
           
            
        </div>
        <Footer/>
        </>
    );
};

export default Home;