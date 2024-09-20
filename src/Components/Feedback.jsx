import React from 'react'

export default function Feedback({personname, feedstyle, feedback, people, peoplenames}) {
  return (
    <div className='feed-tximg'>
        <p className={feedstyle}>{feedback}</p>
        <div className='person'>
            <div className='peopleimg'>
            <img src={people} alt="customers" />
            </div>
            <p className={personname}>{peoplenames}</p>
        </div>
    </div>
  )
}
