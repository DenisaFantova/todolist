import React, { useEffect, useState } from 'react';
import './App.scss';
import Axios from 'axios';

import TodoList from './components/TodoList';

export type Todo = {
  id: number; // eslint-disable-line no-use-before-define
  todoTask: string; // eslint-disable-line no-use-before-define
};

const App: React.FC = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [todoTask, setTodoTask] = useState<string>('');
  const [updatedTask, setUpdatedTask] = useState<Object>({});

  useEffect(() => {
    getTodoTasks();
  }, []);

  const getTodoTasks: () => void = () => {
    Axios.get('http://localhost:5000/todolist').then(response => {
      setTodoList(response.data);
    });
  };

  const addTask: () => void = () => {
    Axios.post('http://localhost:5000/create', {
      todoTask: todoTask,
    }).then(response => {
      setTodoList([
        ...todoList,
        { id: response.data.insertId, todoTask: todoTask },
      ]);
    });
  };

  const updateTask: (id: number) => void = id => {
    Axios.put('http://localhost:5000/update', {
      id: id,
      todoTask: updatedTask,
    }).then(response => {
      setTodoList(
        todoList.map((task, id) => {
          return task.id === id
            ? { id: task.id, todoTask: task.todoTask }
            : task;
        })
      );
    });
  };

  const deleteTask: (id: number) => void = id => {
    Axios.delete(`http://localhost:5000/delete/${id}`).then(response => {
      setTodoList(
        todoList.filter(task => {
          return task.id !== id;
        })
      );
    });
  };

  return (
    <div className='App'>
      <div className='container'>
        <TodoList
          todoList={todoList}
          todoTask={todoTask}
          setTodoTask={setTodoTask}
          setUpdatedTask={setUpdatedTask}
          updateTask={updateTask}
          deleteTask={deleteTask}
          addTask={addTask}
        />
      </div>
    </div>
  );
};

export default App;
