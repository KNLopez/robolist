import React from 'react'
import { CardProps } from '../types'
import { styles } from '../App.styles'

const Card: React.FC<CardProps> = ({
  monster
}) => (
    <div style={styles.card}>
      <img src={`https://robohash.org/${monster.name}/?set=set2&size=150x150`} />
      <h2>{monster.name}</h2>
      <p>{monster.email}</p>
    </div>
  )

export default Card