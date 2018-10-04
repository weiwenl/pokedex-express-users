var React = require("react");

class New extends React.Component {
  render() {
    console.log(this);
    return (
      <html>
        <head />
        <body>
          <h1>Gotta Catch 'Em All!</h1>
          <form method="POST" action="/catch">
              <p>User Id:</p>
              <input type="text" name="userid" />
              <p>Pokemon Id:</p>
              <input type="text" name="pokemonid" />
              <input type="submit" value="Submit"/>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = New;
