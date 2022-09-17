import React from 'react';
import './Components.css';
import StatCardArray from './StatCardArray';
import ProfBonus from './ProfBonus';
import SavingThrows from './SavingThrows';
import SkillsCard from './SkillsCard';

function Stats(props) {
    return (
        <div>
            <StatCardArray stats={props.statsProp} />
            <ProfBonus level="1" />
            <SavingThrows stats={props.statsProp} />
            <SkillsCard stats={props.statsProp} />
        </div>
    )
}

export default Stats;