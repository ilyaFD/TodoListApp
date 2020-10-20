import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main';
import Sidebar from './components/sidebar';

import './style.css';


class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      searchVal: '',
      error: false,
      todoValueAdded: '',
      todoStates: {
        'planning': 'gray',
        'in progress': 'blue',
        'done': 'green'
      },
      activeTodoStates: [],
      activeTodoTrash: false,
      activeTodoPriority: false,
      todos: [
        {
          label: 'task 1',
          important: false,
          state: 'planning',
          id: 1,
          creationDate: this.currentDate(),
          completionDate: null,
          isTrash: false,
        },
        {
          label: 'task 2',
          important: false,
          state: 'in progress',
          id: 2,
          creationDate: this.yesterday(),
          completionDate: null,
          isTrash: false,
        },
        {
          label: 'task 3',
          important: false,
          state: 'in progress',
          id: 3,
          creationDate: this.yesterday(),
          completionDate: null,
          isTrash: false,
        },
        {
          label: 'task 4',
          important: false,
          state: 'done',
          id: 4,
          creationDate: this.dayBeforeYesterday(),
          completionDate: this.dayBeforeYesterday(),
          isTrash: false,
        }
      ]
    };
  };

  currentDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() < 10) ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
    const day = (date.getDate() < 10) ? '0' + date.getDate() : date.getDate();
    const taday = day + '.' + month + '.' + year;
    return taday;
  };
  yesterday = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() < 10) ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
    const day = (date.getDate() < 11) ? '0' + (date.getDate() - 1): date.getDate() - 1;
    const taday = day + '.' + month + '.' + year;
    return taday;
  };
  dayBeforeYesterday = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() < 10) ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
    const day = (date.getDate() < 12) ? '0' + (date.getDate() - 2): date.getDate() - 2;
    const taday = day + '.' + month + '.' + year;
    return taday;
  } 

  addTodoHendler = () => {
    if(this.state.todoValueAdded) {
      const newTodos = [
        {
          label: this.state.todoValueAdded,
          important: false,
          state: 'planning',
          id: Math.floor(Math.random() * 100000),
          creationDate: this.currentDate(),
          completionDate: null,
          isTrash: false,
        },
        ...this.state.todos
      ];
      this.setState({
        error: false,
        todoValueAdded: '',
        todos: newTodos,
      });
    } else {
      this.setState({
        error: true
      });
    }
  };
  
  filterHendler = (state, newActiveTodoStates = [], filterdTodos = undefined) => {
    const {activeTodoStates, activeTodoTrash, activeTodoPriority} = this.state;

    // Set search
    filterdTodos = this.state.todos.filter(todo => todo.label.includes(this.state.searchVal));
    
    // Set active todo state
    if (state) {
      if (!activeTodoStates.includes(state)) {
        newActiveTodoStates = [
          ...activeTodoStates,
          state
        ];
      } else {
        newActiveTodoStates = activeTodoStates.filter(activeTodoState => activeTodoState !== state);
      }
      this.setState({activeTodoStates: newActiveTodoStates});
    }

    // States
    if (activeTodoStates.length) {
      filterdTodos = filterdTodos.filter(todo => 
        activeTodoStates.includes(todo.state) || 
        activeTodoStates.includes('done today') &&
        todo.completionDate == this.currentDate()
      );
    }

    // Trash
    filterdTodos = (activeTodoTrash) ? filterdTodos.filter(todo => todo.isTrash) : filterdTodos.filter(todo => !todo.isTrash);

    // Important
    filterdTodos = (activeTodoPriority) ? filterdTodos.filter(todo => todo.important) : filterdTodos;


    return filterdTodos;
  }

  editTodoLabel = (e, todoId) => {
    const newTodos = this.state.todos.map( todo => {
      if (todo.id == todoId) {
        todo.label = e.target.value;
      }
      return todo;
    });
    this.setState({
      todos: newTodos
    });
  }

  changeTodoState = (todoState, todoId) => {
    const newTodos = this.state.todos.map( todo => {
      if (todo.id == todoId) {

        // Set todo completionDate must be before change todo state
        (todoState == 'done' && todo.state !== 'done')? todo.completionDate = this.currentDate() : todo.completionDate = null;
        
        // Change todo state
        todo.state = todoState;
      }
      return todo;
    });
    this.setState({
      todos: newTodos
    });
  }
  
  moveTodoToTrash = (todoId) => {
    const newTodos = this.state.todos.map( todo => {
      if (todo.id == todoId) {
        todo.isTrash = true;
      }
      return todo;
    });
    this.setState({
      todos: newTodos
    });
  }

  addTodoPriority = (todoId) => {
    const newTodos = this.state.todos.map( todo => {
      if (todo.id == todoId) {
        todo.important = !todo.important;
      }
      return todo;
    });
    this.setState({
      todos: newTodos
    });
  }

  render() {
    const date = new Date();
    return (
      <div className="app container">
        <Main
          todos={this.filterHendler()}
          todoStates={this.state.todoStates} 
          editTodoLabel={this.editTodoLabel}
          changeTodoState={this.changeTodoState} 
          addTodoHendler={this.addTodoHendler} 
          addTodoValHendler={e => this.setState({todoValueAdded: e.target.value})}
          todoValueAdded={this.state.todoValueAdded}
          isError={this.state.error}
          currentDate={this.currentDate}
          moveTodoToTrash={this.moveTodoToTrash}
          addTodoPriority={this.addTodoPriority}
        />
        <Sidebar 
          searchVal={this.state.searchVal}
          searchHendler={e => this.setState({searchVal: e.target.value})}
          todoStates={this.state.todoStates}
          activeTodoStates={this.state.activeTodoStates}
          todos={this.state.todos} 
          filterHendler={this.filterHendler}
          clearFilter={() => this.setState({searchVal: '', activeTodoStates: [], activeTodoTrash: false, activeTodoPriority: false,})}
          currentDate={this.currentDate}
          activeTodoTrash={this.state.activeTodoTrash}
          filterTrashHendler={() => this.setState({activeTodoTrash: !this.state.activeTodoTrash})}
          activeTodoPriority={this.state.activeTodoPriority}
          filterPriorityHendler={() => this.setState({activeTodoPriority: !this.state.activeTodoPriority})}
        />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);