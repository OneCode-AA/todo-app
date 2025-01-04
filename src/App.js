
import './styles/App.css';
import { useState } from 'react';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';

function App() {

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTodo.trim() }]);
      setNewTodo('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="toDo-Container w-full m-auto min-h-[100vh] flex flex-col justify-center items-center bg-slate-900 text-white text-center gap-5">
      <header className="toDo-header">
        <h1 className="text-4xl">My Tasks</h1>
      </header>
      <input
        className='min-w-[40vw] text-center min-h-[5vh] rounded-[4rem] text-black' 
        type="text" 
        value={newTodo} 
        onChange={handleInputChange} 
        placeholder="Add a new todo" 
      />
      <button onClick={addTodo}>Add</button>
      <ol id='toDo-ul' className={`bg-slate-100 text-slate-900 min-w-[40vw] min-h-[50vh] flex flex-col gap-2 border border-solid border-white p-1 rounded-[2rem]`}>
        {todos.map(todo => (
          <li 
          className={`py-4 px-10 w-full flex justify-between border-b border-slate-900 text-slate-900 `}
          key={todo.id}
          >
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>
              <DeleteTwoToneIcon className='text-red-700 deleteMe'/>
              </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
