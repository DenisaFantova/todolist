import React, { useState, useEffect, useRef } from 'react';

import './style.scss';

import { Todo } from '../../App';

import editIco from '../../assets/pen-solid.svg';

type Props = {
  task: Todo;
  index: number;
  setUpdatedTask: React.Dispatch<React.SetStateAction<Object>>;
  updateTask: (id: number) => void;
  deleteTask: (id: number) => void;
};

const TodoItem: React.FC<Props> = ({
  task,
  index,
  setUpdatedTask,
  updateTask,
  deleteTask,
}: Props) => {
  const [newTaskValue, setNewTaskValue] = useState(task.todoTask);
  const [disabledInput, setDisabledInput] = useState<boolean>(true);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!disabledInput) {
      inputRef.current?.focus();
    }
  }, [disabledInput]);

  return (
    <div className='flex todolist__item'>
      <span className='todolist__order'>{index + 1}</span>
      <input
        className='todolist__input'
        type='text'
        ref={inputRef}
        value={newTaskValue}
        disabled={disabledInput}
        onChange={e => {
          setUpdatedTask(e.target.value);
          setNewTaskValue(e.target.value);
        }}
      />
      {disabledInput ? (
        <div
          className='todolist__ico todolist__ico--edit'
          onClick={() => {
            setDisabledInput(false);
          }}
        ></div>
      ) : (
        <div
          className='todolist__ico todolist__ico--save'
          onClick={() => {
            updateTask(task.id);
            setDisabledInput(true);
          }}
        ></div>
      )}
      <div
        className='todolist__ico todolist__ico--delete'
        onClick={() => {
          deleteTask(task.id);
        }}
      ></div>
    </div>
  );
};

export default TodoItem;
