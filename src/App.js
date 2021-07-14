import React, {useState} from 'react';
import Tweet from './Tweet';
import "./App.css";
// import Hello from './sayHello';


function App(){
  const [users, setUsers] = useState([
  {name:"Dev Ed", message:"Welcome to my channel"},
  {name:"Traversy Media", message:"Welcome to my channel"},
  {name:"John Snow", message:"Winter is coming"}]);
  


  return (
    <div className="App">
      {users.map(user => (
        <Tweet name={user.name} message={user.message}/>
      ))}
    </div>

  );

  // const sayHello = () =>{
  //   console.log("Heyy Afi :)");
  // }

}

export default App;