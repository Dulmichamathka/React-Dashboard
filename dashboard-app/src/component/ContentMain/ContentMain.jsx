import React from 'react'
import "./ContentMain.css";
import Transactions from '../Transactions/Transactions';
import Cards from '../Cards/Cards';
import Report from '../Report/Report';
import Budget from '../Budget/Budget';
import Subscriptions from '../Subscriptions/Subscriptions';
import Saving from '../Saving/Saving';
import Loans from '../Loans/Loans';
import Financial from '../Financial/Financial';


const ContentMain = () => {
  return (
    <div className='main-content-holder'>
      <div className='content-grid-one'>
        
      <Cards/>
      <Transactions/>
      <Report/>

      </div>

      <div className="content-grid-two">
        <Budget/>
        <div className="grid-two-item">
          <div className="subgrid-two">
              <Subscriptions/>
              <Saving/>
              
          </div>
        </div>

        <div className="grid-two-item">
          <div className="subgrid-two">
            <Loans/>
            <Financial/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ContentMain