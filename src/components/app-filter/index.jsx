import React, { Component } from 'react'
import "./app-filter.scss"

class AppFilter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      buttonsData: [
        { name: 'all', label: 'All employees' },
        { name: 'award', label: 'Award nominees' },
        { name: 'salary', label: 'Salary 1000$+' },
      ]
    }
  }


  render() {
    const buttons = this.state.buttonsData.map(({ name, label }) => {
      const active = this.props.filter === name;
      const activeClass = active ? 'btn-light' : 'btn-outline-light'
      return (
        <button
          className={`btn ${activeClass}`}
          key={name}
          onClick={() => this.props.onFilterSelect(name)}
          type='button'>{label}</button>
      )
    })

    return (
      <div className="btn-group">
        {buttons}
        {/* <button
          className='btn btn-light'
          type='button'>All employees</button>
        <button
          className='btn btn-outline-light'
          type='button'>Award nominees</button>
        <button
          className='btn btn-outline-light'
          type='button'>Salary 1000$+</button> */}
      </div>
    )
  }
}

export default AppFilter