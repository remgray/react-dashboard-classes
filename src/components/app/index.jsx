import React, { Component } from 'react';
import nextId from "react-id-generator";

import AppFilter from '../app-filter';
import AppInfo from '../app-info';
import EmployeesAddForm from '../employees-add-form';
import EmployeesList from '../employees-list';
import SearchPanel from '../search-panel';

import './app.scss'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'Master D.', salary: 1000, increase: false, award: false, id: 1 },
        { name: 'Billy M.', salary: 2000, increase: false, award: false, id: 2 },
        { name: 'Van T.', salary: 800, increase: false, award: false, id: 3 }
      ],
      term: '',
      filter: 'all'
    }
  }

  deleteItem = (id) => {
    this.setState(({ data }) => ({
      data: data.filter((item) => item.id !== id)
    }))
  }

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      award: false,
      id: nextId()
    }
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    });
  };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map(item => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] }
        }
        return item
      })
    }))
  };

  awardEmployeesAmount = (id) => {
    let amount = 0;

    this.state.data.forEach(el => {
      if (el.award){
        amount++
      }
    })

    return amount;
  }

  searchEmp = (items, term) => {
    if (term.trim().length === 0){
      return items;
    }

    return items.filter(item => {
      return item.name.indexOf(term) > -1
    })
  }

  onUpdateSearch = (term) => {
    this.setState({term})
  }

  filterPost = (items, filter) => {
    switch (filter) {
      case 'award':
        return items.filter(item => item.award)
      case 'salary':
        return items.filter(item => item.salary >= 1000)
      default:
        return items;
    }
  }

  onFilterSelect = filter => {
    this.setState({filter})
  }

  render() {
    const { data, term, filter } = this.state;
    const employees = this.state.data.length;
    const awarded = this.state.data.filter(item => item.award).length;
    const visibleData = this.filterPost(this.searchEmp(data, term), filter);

    return (
      <div className='app'>
        <AppInfo 
          employees={employees}
          awarded={awarded}/>
        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
        </div>
        <EmployeesList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp} />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    )
  }
}

export default App;