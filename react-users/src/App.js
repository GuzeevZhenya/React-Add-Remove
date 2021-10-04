import React,{useState} from 'react'
import './App.css';

const App = () => {
  const [users, setUsers] = useState([
    { name: "Alex", age: 23, job: "Prog", id:1},
    {name:"Jhon",age:13,job:"School",id:2},
    {name:"Anton",age:25,job:"Med",id:3}
  ])

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [job, setJob] = useState("");


  //Удаление пользователя по id
  const userRemove = (id) => {
    const removeElement = users.filter(item => item.id !== id)
    setUsers(removeElement)
  }
  //Добавление новых пользователей
  const addUser = () => {
   setUsers([...users,{name:name,age:age,job:job}])
  }



  const userElements = users.map(item=>{
    return (
      <ul>
        <li>{item.name}</li>
        <li>{item.age}</li>
        <li>{item.job}</li>
        <button onClick = {() => userRemove(item.id)}>Del</button>
      </ul>
    )
  })
  return (
    <div className="App">
      <div>
        <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="name" />
        <input onChange={(e)=>setAge(e.target.value)} type="number" placeholder="age" />
        <input onChange={(e)=>setJob(e.target.value)} type="text" placeholder="job" />
        <button onClick={()=>{addUser()}}>Click</button>
      </div>
      {userElements}
      <div>Количество пользователей {users.length}</div>
    </div>
  );
}

export default App;
