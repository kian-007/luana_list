import React, {useState} from 'react';
import './filterFooter.css'

const FliterFooter = ({tasks, updateFilter}) => {
    const [filter, setFilter] = useState('all')
    const handleFilter = (filterName) => {
        setFilter(filterName)
        updateFilter(filterName)
    }

    return (
        <div className="filterFooter">
            <div className="filterFooter__countItems">{tasks.length} items</div>
            <div className="filterFooter__filters">
                <ul>
                    <li><button onClick={()=>{handleFilter('all')}} className={filter === "all"? "active":""}>All</button></li>
                    <li><button onClick={()=>{handleFilter('active')}} className={filter === "active"? "active":""}>Active</button></li>
                    <li><button onClick={()=>{handleFilter('completed')}} className={filter === "completed"? "active":""}>Completed</button></li>
                </ul>
            </div>
        </div>
    );
}

export default FliterFooter;