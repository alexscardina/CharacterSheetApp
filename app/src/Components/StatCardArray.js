import React from 'react';
import './Components.css';
import StatCard from './StatCard';

function StatCardArray(props) {
    return(
        <div class="stat-card-container">
            {props.stats.map(stat => {
                return (
                    <div>
                        <StatCard 
                            name={stat.name}
                            score={stat.score}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default StatCardArray;