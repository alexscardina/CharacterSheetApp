import React from 'react';
import './Components.css';

function ProfBonus(props) {
    return (
        <div class="prof-bonus-container">
            <div class="prof-bonus-circle">
                +{props.bonus}
            </div>
            <div class="prof-bonus-rectangle">
                Proficiency Bonus
            </div>
        </div>
    )
}

export default ProfBonus;