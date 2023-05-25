import React,{useState} from 'react';
import './App.css';


function App() {
  const [todos,setTodos] = useState([])
  const [todo,setTodo] = useState('')
  const [buttonName,setBtnName] = useState('')
  const date =new Date()

  function textChange(e){
    setTodo(e.target.value)
  }

  function addItems(e){
    if(e.target.classList[1]=== 'fa-plus' || e.key === 'Enter'){
      const newTodo = {
        task : todo,
        time : date.toLocaleTimeString([],{ hour: 'numeric', minute: 'numeric' }),
        dateof : date.toLocaleDateString(undefined,{month:'short',day:'2-digit'})
      }
      setTodos([...todos,newTodo])
      setTodo('')
    }
  }


  function removeItem(pos){
    todos.splice(pos,1)
    setTodos([...todos])
  }

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <h3>Fazil</h3>
        <div>
          <h2>{date.toLocaleDateString('en-US',{weekday:'long'})}</h2>
          <h3>{date.toLocaleDateString(undefined,{ year:'numeric',month: 'long', day: 'numeric'})}</h3>
        </div>

      </div>
      <div className="input">
        <input value={todo}  onChange={textChange} onKeyPress={addItems} type="text" placeholder="🖊️ Add item..." />
        <i onClick={addItems} onMouseEnter={(e)=>setBtnName(e.key)} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {
          <ul>
            {
              todos.map((value,k)=>{
              return(
                  <li key={k}>
                    <div className='listEdit'>
                      <h5>{value.task}</h5>
                      <p>{value.dateof}   {value.time}</p>
                    </div>  
                    <div className='editing'>
                    <input type="checkbox" />
                    <i className='fa fa-trash' onClick={()=>{ removeItem(k) }}></i>
                    </div>
                  </li>  
              )
              })
            }
          </ul>
        }
      </div>
    </div>
  );
}

export default App;
