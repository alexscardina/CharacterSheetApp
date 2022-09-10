import './App.css';
import CharacterInfo from './Components/CharacterInfo';
import StatCardArray from './Components/StatCardArray';
import ProfBonus from './Components/ProfBonus';
import SavingThrows from './Components/SavingThrows';
import SkillsCard from './Components/SkillsCard';

// consider adding 'Stats' component
// - can pass stat scores to component
// - have it render array, profbonus, STs, skills, etc
// - have it calculate profbonus from level and modifiers from stats

const statsProp = [
  {name: 'Strength', score: '15'},
  {name: 'Dexterity', score: '13'},
  {name: 'Constitution', score: '14'},
  {name: 'Intelligence', score: '8'},
  {name: 'Wisdom', score: '12'},
  {name: 'Charisma', score: '10'},
];

function App() {
  return (
    <div class="app app-header">
      <CharacterInfo />
      <StatCardArray 
        stats={statsProp}
      />
      <ProfBonus 
        bonus="2"
      />
      <SavingThrows />
      <SkillsCard />
    </div>
  );
}

export default App;
