import React from 'react';

import './style.scss';

import TodoItem from '../TodoItem';
import AddTask from '../AddTask';

import { Todo } from '../../App';

type Props = {
  todoList: Todo[];
  todoTask: string;
  setTodoTask: React.Dispatch<React.SetStateAction<string>>;
  addTask: () => void;
  setUpdatedTask: React.Dispatch<React.SetStateAction<{}>>;
  updateTask: (id: number) => void;
  deleteTask: (id: number) => void;
};

const TodoList: React.FC<Props> = ({
  todoList,
  todoTask,
  setTodoTask,
  addTask,
  setUpdatedTask,
  updateTask,
  deleteTask,
}: Props) => {
  return (
    <>
      <div className='todolist'>
        <AddTask
          setTodoTask={setTodoTask}
          addTask={addTask}
          todoTask={todoTask}
        />

        {todoList.map((task, index) => (
          <TodoItem
            key={task.id}
            index={index}
            task={task}
            setUpdatedTask={setUpdatedTask}
            updateTask={updateTask}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </>
  );
};

export default TodoList;
