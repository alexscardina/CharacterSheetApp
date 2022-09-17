import React from 'react';
import './Components.css';

// consider mapping skills to new object
// new object can check stat in 'skills' and add respective score
// ex. new object = name = skills.name, score = statsProp.score
// newer object maps statsProp.score -> statMod
// ex. newer object = name = skills.name, mod = calculateMod(statsProp.score)
// newest object adds exported profBonus to relative stats
// (isProficient boolean?)

const skills = [
    {name: 'Acrobatics', stat: 'Dexterity'},
    {name: 'Animal Handling', stat: 'Wisdom'},
    {name: 'Arcana', stat: 'Intelligence'},
    {name: 'Athletics', stat: 'Strength'},
    {name: 'Deception', stat: 'Charisma'},
    {name: 'History', stat: 'Intelligence'},
    {name: 'Insight', stat: 'Wisdom'},
    {name: 'Intimidation', stat: 'Charisma'},
    {name: 'Investigation', stat: 'Intelligence'},
    {name: 'Medicine', stat: 'Wisdom'},
    {name: 'Nature', stat: 'Intelligence'},
    {name: 'Perception', stat: 'Wisdom'},
    {name: 'Performance', stat: 'Charisma'},
    {name: 'Persuasion', stat: 'Charisma'},
    {name: 'Religion', stat: 'Intelligence'},
    {name: 'Sleight of Hand', stat: 'Dexterity'},
    {name: 'Stealth', stat: 'Dexterity'},
    {name: 'Survival', stat: 'Wisdom'},
];

function SkillsCard(props) {
    return(
        <div class="skills-card">
            <div class="card-title">Skills</div>
        </div>
    )
}

export default SkillsCard;