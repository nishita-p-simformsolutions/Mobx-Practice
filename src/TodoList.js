import React from "react";
import { observer } from "mobx-react";

@observer
class TodoList extends React.Component {
  createNew(e) {
    if (e.which === 13) {
      this.props.store.createTodo(e.target.value);
      e.target.value = "";
      console.log(this.createNew);
    }
  }

  filter(e) {
    this.props.store.filter = e.target.value;
    console.log(this.filter);
  }

  toggleComplete(todo) {
    todo.complete = !todo.complete;
  }

  render() {
    const { clearComplete, filter, filteredTodos } = this.props.store;

    const todoLis = filteredTodos.map((todo) => (
      <li key={todo.id}>
        <input
          type="checkbox"
          onChange={this.toggleComplete.bind(this, todo)}
          value={todo.complete}
          checked={todo.complete}
        />
        <span>{todo.value}</span>
      </li>
    ));
    return (
      <div>
        <h1>Todos</h1>
        <input className="new" onKeyPress={this.createNew.bind(this)} />
        <input
          className="filter"
          value={filter}
          onChange={this.filter.bind(this)}
        />
        <ul>{todoLis}</ul>
        <a href=" " onClick={clearComplete}>
          Clear Complete
        </a>
      </div>
    );
  }
}

export default TodoList;
