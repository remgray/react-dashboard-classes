import React from 'react'
import "./employees-list-item.scss"

const EmployeesListItem = (props) => {
  const { name, salary, onDelete, onToggleProp, increase, award } = props;

  return (
    <li className={`list-group-item d-flex justify-content-between ${increase ? 'increase' : ''} ${award ? 'like': ''}`}>
      <span onClick={onToggleProp} data-toggle="award" className="list-group-item-label">{name}</span>
      <input type="text" className="list-group-item-input" defaultValue={`${salary}$`} />
      <div className='d-flex justify-content-center align-items-center'>
        <button type="button"
          className="btn-cookie btn-sm "
          data-toggle="increase"
          onClick={onToggleProp}>
          <i className="fas fa-cookie"></i>
        </button>

        <button type="button" onClick={onDelete}
          className="btn-trash btn-sm ">
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  )
}

export default EmployeesListItem