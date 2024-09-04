import {useState} from "react";


export default function Player() {

  const [enterdPlayerName, setEnteredPlayerName]= useState('');
  const [submitted, setSumbitted]= useState('false');

  function handleChange(event){
    setEnteredPlayerName(event.target.value);
  }
  function handleClick(){
    setSumbitted(true);
  }
  return (
    <section id="player">
      <h2>Welcome { submitted? enterdPlayerName:'unknown entity'}</h2>
      <p>
        <input type="text" onChange={handleChange} value={enterdPlayerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
