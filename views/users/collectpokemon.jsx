var React = require("react");

class CollectPokemon extends React.Component {
  render() {
    let trainer = this.props.trainer.map(trainer => (
         <li key={trainer.id}><a href={'/users/' + trainer.id}> {trainer.name}</a></li>
    console.log(this);
    return (
      <html>
        <head />
        
        <body>
          <h1>{userIdentity}'s pokemon</h1>
          <ul>
            {this.props.pokemon.map(pokemon => (
              <li key={pokemon.id}>
                {pokemon.name}
              </li>
            ))}
          </ul>
        </body>
      </html>
    );
  }
}

module.exports = CollectPokemon;
