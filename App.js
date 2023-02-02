import React from 'react';
import ReactDOM from 'react-dom/client';
import Body from './src/components/Body';
import Footer from './src/components/Footer';
import Header from './src/components/Header';


function AppLayout() {
    return (
        <div>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )

}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />)