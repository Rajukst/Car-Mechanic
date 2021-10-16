import React from 'react';
import Header from '../Header/Header';
import HeaderCarosul from '../HeaderAndCarosul/HeaderCarosul';
import Home from '../Home';


const MainHome = () => {
    return (
        <div>
            <Header></Header>
             <HeaderCarosul></HeaderCarosul>
            <Home></Home>
       
        </div>
    );
};

export default MainHome;