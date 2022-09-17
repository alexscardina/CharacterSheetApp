import React from 'react';
import './Components.css';

function StatModScore(props) {
    let num = ~~((props.score - 10) / 2)
    if (props.score < 10 && props.score % 2 !== 0) num -= 1
    if (num > 10) num = 10
    return num;
}

function StatCard(props) {
    let statModString = "stat-mod-card";
    if (props.score > 11) statModString += " pos-stat-mod";
    if (props.score < 10) statModString += " neg-stat-mod";
    return(
        <div>
            <div class="stat-card">
                <div>{props.name}</div>
                <div class="score-text">{props.score}</div>
            </div>
            <div class={statModString}>
                <div class>
                    <StatModScore score={props.score} />
                </div>
            </div>
        </div>
    )
}

export default StatCard;