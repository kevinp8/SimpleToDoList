import React from 'react'
import Overview from './components/Overview';


class App extends React.Component{
  
  constructor() {
    super()
    this.state = {
      tasks: localStorage.getItem('tasks') == null ? [] : localStorage.getItem('tasks').split(',')
    }
    this.addTask = this.addTask.bind(this)
    this.saveTasks = this.saveTasks.bind(this)
    this.removeAll = this.removeAll.bind(this)
  }

  saveTasks() {
    if (localStorage.getItem('tasks') == null) localStorage.setItem('tasks', this.state.tasks)
  }

  addTask(){
    this.setState((prev) => ({
      tasks: prev.tasks.concat(document.querySelector('input').value)
    }), ()=>{
      let ls = localStorage.getItem('tasks').split(',')
       if (ls[0] === '') ls.shift()
      ls.push(document.querySelector('input').value)
      localStorage.setItem('tasks', ls)
    })
  }

  removeAll() {
    this.setState(({
      tasks: []
    }), ()=> localStorage.setItem('tasks', ''))
  }

  render(){
    return (
      <div>
        {this.saveTasks()}
        <input type='text' />
        <button type='submit' onClick={this.addTask}>Submit</button>
        <div>
          <button onClick={this.removeAll}>Clear</button>
        </div>
        <Overview list={this.state.tasks}/>
      </div>
    )
  }
}

export default App;
