import React, { useState, useEffect } from 'react';
import { Monster } from './types';
import CardList from './components/CardList';
import { styles } from './App.styles';

const App: React.FC = () => {

  const [monsters, setMonsters] = useState<Monster[]>([])
  const [filteredMonsters, setFilteredMonsters] = useState<Monster[]>([])

  useEffect(() => {
    fetchData()
  }, [])


  const searchMonsters = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFilteredMonsters(monsters.filter(monster => monster.name.toLowerCase().includes(e.currentTarget.value.toLowerCase())))
  }

  const fetchData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    res.json()
      .then((monsters: Monster[]) => {
        console.log(monsters)
        setMonsters(monsters)
        setFilteredMonsters(monsters)
      })
  }


  return (
    <div>
      <input type="text" placeholder="Enter monster name" onChange={searchMonsters} style={styles.search} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
