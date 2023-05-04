import React from 'react';
import BalanceCard from '../BalanceCard/BalanceCard';
import Resume from '../Resume/Resume';
import './Main.css';


const Main = (props) => {
  const revenue = props.transactions.map((transaction) => {
    
  })

  return (
    <div className='Main-component'>
      <div className='main-container'>
        <BalanceCard balance='0,00' />
        <Resume transactions = {props.transactions} />
      </div>
    </div>
  )
}

export default Main