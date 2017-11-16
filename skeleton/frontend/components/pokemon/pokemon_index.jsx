import React from 'react';

class PokemonIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllPokemon();
  }
  render() {
    const { pokemon } = this.props;

    return (
      <section className="pokedex">
        <ul>
          <span>{pokemon.id}</span>
          <img src={pokemon.image_url} alt={pokemon.name} />
          <span>{pokemon.name}</span>
        </ul>
      </section>
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
