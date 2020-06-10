import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import moment from 'moment';

const Month = () => {

  const state = {
    date: moment()
  }
  const weekday = moment.weekdaysShort();

  useEffect( () => {
    console.log(weekday, state)
  })
  return (
    <div>
      Hello
    </div>
  )
}

export default withRouter(Month);