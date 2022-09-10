import React from 'react';
import './Components.css';

function StatCard(props) {
    return(
        <div class="stat-card">
            <div>{props.name}</div>
            <div class="score-text">{props.score}</div>
        </div>
    )
}

export default StatCard;