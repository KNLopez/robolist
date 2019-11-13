import React, { useState } from 'react';
import { Monster } from './types';
import CardList from './components/CardList';
import { styles } from "./App.styles"

const App: React.FC = () => {

  const [monsters, setMonsters] = useState<Monster[]>([])


  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(monsters => {
      setMonsters(monsters.map((monster: Monster) => ({ email: monster.email, name: monster.name })))
    })

  return (
    <div style={styles.cardContainer}><CardList monsters={monsters} /></div>
  );
}

export default App;
