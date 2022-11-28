import React, { useState } from 'react';

import './style.scss';

type Props = {
  setTodoTask: React.Dispatch<React.SetStateAction<string>>;
  addTask: () => void;
  todoTask: any;
};

const AddTask: React.FC<Props> = ({
  setTodoTask,
  addTask,
  todoTask,
}: Props) => {
  const [newTag, setNewTag] = useState(todoTask);

  return (
    <div className='addTask flex-sm'>
      <button
        className='addTask__button'
        onClick={() => {
          addTask();
          setNewTag('');
        }}
      >
        Add Todo
      </button>
      <div className='addTask__newTask'>
        <label className='addTask__label'>Todo description</label>
        <input
          className='addTask__input'
          type='text'
          value={newTag}
          placeholder='new todo'
          onChange={e => {
            setTodoTask(e.target.value);
            setNewTag(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default AddTask;
