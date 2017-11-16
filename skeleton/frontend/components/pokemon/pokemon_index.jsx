import React from 'react';

class PokemonIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllPokemon();
    this.render();
  }
  render() {
    const { pokemon } = this.props;
    return (
      <ul>
        {
          pokemon.map(poke => (
            <li key={poke.id} >
              {poke.name}
              <img src={poke.image_url}></img>
            </li>
          ))
        }
      </ul>
    );
  }
}

export default PokemonIndex;


// class TodoList extends React.Component {
//
//   render() {
//     const { todos, receiveTodo } = this.props;
//     const todoItems = todos.map(todo => (
//         <TodoListItem
//           key={`todo-list-item${todo.id}`}
//           todo={todo}
//           receiveTodo={ receiveTodo } />
//       )
//     );
//
//     return(
//       <div>
//         <ul className="todo-list">
//           { todoItems }
//         </ul>
//         <TodoForm receiveTodo={ receiveTodo }/>
//       </div>
//     );
//   }
// }
