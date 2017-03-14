import React from 'react';

var GameSubmit = (props) => (
  <form className="game-submit-form">
    <fieldset>
      <legend>Enter a Game You Are Hyped to Play!</legend>
      Game Title:<br />
      <input type="text" name="title" /><br />
      Release Date:<br />
      <input type="text" name="date" /><br />
      Platform:<br />
      <select name="platform">
        <option value="pc">PC</option>
        <option value="playstation">PS4</option>
        <option value="xbox">Xbox One</option>
        <option value="switch">Nintendo Switch</option>
      </select><br /><br />
      <input type="submit" value="Submit" />
    </fieldset>
  </form>
);

export default GameSubmit;
