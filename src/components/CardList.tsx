import React from 'react'
import { Monster, CardlistProps } from '../types'
import Card from './Card'
import { styles } from '../App.styles'

const CardList: React.FunctionComponent<CardlistProps> = ({
  monsters
}) => (
    <div style={styles.cardList}>
      {monsters.map((monster: Monster) => <Card key={monster.name} monster={monster} />)}
    </div>
  )

export default CardList