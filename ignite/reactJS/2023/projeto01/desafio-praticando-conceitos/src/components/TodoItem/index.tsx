import styles from './todoItem.module.css';

import { Check, Trash } from '@phosphor-icons/react';

interface ITodoItem {
  content: string;
  isCompleted: boolean;
}

interface Props {
  todoItem: ITodoItem;
  handleToggleTodoItemCompletion: (todoItem: ITodoItem) => void;
  handleRemoveTodoItem: (todoItem: ITodoItem) => void;
}
export function TodoItem({ 
  todoItem, 
  handleRemoveTodoItem, 
  handleToggleTodoItemCompletion 
}: Props) {

  return (
    <div className={styles.itemContainer}>
      <label className={todoItem.isCompleted ? styles.checkboxChecked : ''} htmlFor={`todo-${todoItem.content}`}>
        <input 
          type="checkbox" 
          name="todo" 
          id={`todo-${todoItem.content}`} 
          onClick={() => handleToggleTodoItemCompletion(todoItem)}
        />
        {todoItem.isCompleted && <Check size={15} className={styles.icon} />}
      </label>

      <div className={styles.todoContent}>
        <span className={todoItem.isCompleted ? styles.contentChecked : ''}>
          {todoItem.content}
        </span>
      </div>

      <button 
        className={styles.deleteButton} 
        type="button"
        onClick={() => handleRemoveTodoItem(todoItem)}
      >
        <Trash size={16} />
      </button>
    </div>
  );
}

