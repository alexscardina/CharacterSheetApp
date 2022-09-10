import './App.css';
import CharacterInfo from './Components/CharacterInfo';
import StatCardArray from './Components/StatCardArray';

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
    </div>
  );
}

export default App;
