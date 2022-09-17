import React from 'react';
import './Components.css';

// consider adding CalcProfBonus file
// can export function to calculate the bonus
// this and others will call it to display

function ProfBonus(props) {
    let bonus = 2;
    if (props.level > 4 && props.level < 9) bonus = 3;
    else if (props.level > 8 && props.level < 13) bonus = 4;
    else if (props.level > 12 && props.level < 17) bonus = 5;
    else if (props.level > 16) bonus = 6;
    return (
        <div class="prof-bonus-container">
            <div class="prof-bonus-circle">
                +{bonus}
            </div>
            <div class="prof-bonus-rectangle">
                Proficiency Bonus
            </div>
        </div>
    )
}

export default ProfBonus;