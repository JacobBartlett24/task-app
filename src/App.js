import React, {Component} from 'react';
import Overview from './components/Overview';


class App extends Component{
  constructor(){
    super()

    this.state = {
      value: '',
      tasks: [],
    };
    this.onClickBtn = this.onClickBtn.bind(this);
  }

  onClickBtn(){
    let inputValue = document.getElementById('input').value;
    this.setState(prevState => ({
      tasks: [...prevState.tasks, inputValue],
    }));
    let newListItem = document.createElement('li')
    newListItem.innerText = this.state.tasks[this.state.tasks.length -1]
    let taskList = document.getElementById('tasklist');
    taskList.appendChild(newListItem);
  }

  render(){
    return (
    <div className="App">
      <Overview content = "Click Me!" onButtonClicked={this.onClickBtn}/>
    </div>
  );
}
}

export default App;
