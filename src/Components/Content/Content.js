import React from 'react';
import HomeImage from '../../Components/HomeImage/HomeImage';
import HomeContent from '../HomeContent/HomeContent'
import './Content.css';

export default function Content() {
    return (
        <div className="greeting-main">
            <div className="greeting-text-div">
                <HomeContent />
            </div>
            <div className="greeting-image">
                <HomeImage />
            </div>
        </div>
    )
}
