import React, { useState, useEffect } from 'react';

const appStyle = {
  fontFamily: 'sans-serif',
  background: '#f8fafc',
  minHeight: '100vh',
  padding: '2rem',
};

const todoStyle = {
  maxWidth: '400px',
  margin: '0 auto',
  background: '#fff',
  borderRadius: '16px',
  boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
  padding: '2rem'
};

const inputStyle = {
  width: '80%',
  padding: '0.8rem',
  borderRadius: '8px',
  border: '1px solid #ddd',
  outline: 'none',
  fontSize: '1rem',
};

const buttonStyle = {
  padding: '0.8rem 1.2rem',
  marginLeft: '0.5rem',
  border: 'none',
  borderRadius: '8px',
  background: '#4f46e5',
  color: '#fff',
  fontWeight: 'bold',
  cursor: 'pointer'
};

const todoItemStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0.6rem 0',
  borderBottom: '1px solid #eee',
  fontSize: '1.1rem',
};

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  // Carrega do localStorage na inicialização
  useEffect(() => {
    const data = localStorage.getItem('todo-tasks');
    if (data) setTasks(JSON.parse(data));
  }, []);

  // Salva no localStorage sempre que tasks mudar
  useEffect(() => {
    localStorage.setItem('todo-tasks', JSON.stringify(tasks));
  }, [tasks]);

  function addTask(e) {
    e.preventDefault();
    if (!task.trim()) return;
    setTasks([...tasks, task.trim()]);
    setTask('');
  }

  function removeTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  return (
    <div style={appStyle}>
      <div style={todoStyle}>
        <h2 style={{ textAlign: 'center', marginBottom: '1.2rem', color: '#4f46e5' }}>To Do List</h2>
        <form onSubmit={addTask} style={{ display: 'flex', marginBottom: '1.5rem' }}>
          <input
            style={inputStyle}
            type="text"
            placeholder="Adicione uma tarefa..."
            value={task}
            onChange={e => setTask(e.target.value)}
          />
          <button style={buttonStyle} type="submit">+</button>
        </form>
        <ul style={{ listStyle: 'none', padding: '0' }}>
          {tasks.map((item, idx) => (
            <li key={idx} style={todoItemStyle}>
              {item}
              <button
                onClick={() => removeTask(idx)}
                style={{ background: '#ef4444', border: 'none', borderRadius: '8px', color: 'white', fontWeight: 'bold', cursor: 'pointer', padding: '0.4rem 0.7rem', marginLeft: '1rem' }}
              >
                x
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
