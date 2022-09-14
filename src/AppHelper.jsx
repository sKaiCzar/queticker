import React from 'react';
import ButtonTracker from './components/ButtonTracker.jsx';
import Header from './components/Header.jsx';
import ContestAdder from './components/ContestAdder.jsx';
import Contest from './components/Contest.jsx';
import './apphelper.css';


function AppHelper() {
    return (
        <div className='flex-container'>
            <div className='flex-child'>
                <Header />
                <ButtonTracker />
                <ContestAdder />
            </div>
            <div className='flex-child'>
                <Contest />
            </div>
        </div>

    );
}

export default AppHelper;