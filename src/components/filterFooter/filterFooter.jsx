import React from 'react';
import './filterFooter.css'

const FliterFooter = () => {
    return (
        <div className="filterFooter">
            <div className="filterFooter__countItems">2 items</div>
            <div className="filterFooter__filters">
                <ul>
                    <li><button>All</button></li>
                    <li><button>Active</button></li>
                    <li><button className="active">Completed</button></li>
                </ul>
            </div>
        </div>
    );
}

export default FliterFooter;