import React from 'react';
import './app-info.scss'

const AppInfo = ({ employees, awarded }) => {
  return (
    <div className='app-info'>
      <h1>Accounting for employees in the company</h1>
      <h2>Total number of employees: {employees}</h2>
      <h2>Award nominees: {awarded}</h2>
    </div>
  )
}

export default AppInfo;