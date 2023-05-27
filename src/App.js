import React,{useState} from 'react';
import './App.css';


function App() {
  const [todos,setTodos] = useState([])
  const [todo,setTodo] = useState('')
  const [deleteItem,setDelete] = useState([])
  const date =new Date()

  function textChange(e){
    setTodo(e.target.value)
  }

  function addItems(e){
    if(e.target.classList[1]=== 'fa-plus' || e.key === 'Enter'){
      const newTodo = {
        task : todo,
        status : false,
        id : Date.now(),
        time : date.toLocaleTimeString([],{ hour: 'numeric', minute: 'numeric' }),
        dateof : date.toLocaleDateString(undefined,{month:'short',day:'2-digit'})
      }
      setTodos([...todos,newTodo])
      setTodo('')
    }
  }

  function removeItem(pos){
    let [sValues] = todos.splice(pos,1)
    setTodos([...todos])
    setDelete((pre)=>[...pre,sValues])
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
        <i onClick={addItems} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        
          <ul>
            {
              todos.map((value,k)=>{
              return(
                  <li key={k}>
                    <div className='listEdit'>
                      <h5 className={value.status ? 'crossed' : ''}>{value.task}</h5>
                      <p>{value.dateof}   {value.time}</p>
                    </div>  
                    <div className='editing'>
                    <input value={value.status} type="checkbox" onChange={(e)=>{
                      setTodos(todos.filter((obj)=>{
                        if(obj.id === value.id){
                          obj.status = e.target.checked;
                        }
                        return obj
                      }))
                    }} />
                    <i className='fa fa-trash' onClick={(e)=>{ removeItem(e) }}></i>
                    </div>
                  </li>
              )
              })
            }
          </ul>
        
      </div>

      <div className='draft'>
        <h2>Draft Box</h2>
        {
          deleteItem.map((value,k)=>{
          return(
            <div className='draft-list' key={k}>
              <h4>{value.task}</h4>
              <p>{value.dateof}  {value.time}</p>
            </div>
          )
          })
        }
      </div>
    </div>
  );
}

export default App;
