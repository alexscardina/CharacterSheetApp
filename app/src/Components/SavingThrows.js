import React from 'react';
import './Components.css';

function StatModScore(props) {
    let num = ~~((props.score - 10) / 2)
    if (props.score < 10 && props.score % 2 !== 0) num -= 1
    if (num > 10) num = 10
    return num;
}

function SavingThrows(props) {
    return(
        <div class="saving-throws-card">
            <div class="saving-throws-container">
                {props.stats.map(stat => {
                    return (
                        <div>
                            {stat.name}:&nbsp;
                            <StatModScore score={stat.score} /><br />
                        </div>
                    )
                })}
            </div>
            <div class="card-title"><br />Saving Throws</div>
        </div>
    )
}

export default SavingThrows;