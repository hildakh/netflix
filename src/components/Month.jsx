import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import Day from './Day';
const Month = () => {

  const state = {
    date: moment()
  }
  const weekday = moment.weekdaysShort();

  useEffect( () => {
    console.log(weekday, state)
  })
  return (
    <>
    <div className='month-name'
    style={{
      textAlign: 'center'
    }}
    >
      June
    </div>
    <div
    className='day-list'
    style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: '100%',
      height: '100%',
      overflow: 'scroll'
    }}>
<Day />
<Day />
<Day />
<Day /><Day />
<Day /><Day />

<Day />
<Day />
<Day />
<Day /><Day />
<Day /><Day />

<Day />
<Day />
<Day />
<Day /><Day />
<Day /><Day />

<Day />
<Day />
<Day />
<Day /><Day />
<Day /><Day />

    </div>
    </>
  )
}

export default withRouter(Month);