import { PlusCircle } from '@phosphor-icons/react';

import styles from './form.module.css';
import { ChangeEvent } from 'react';

interface Props {
  handleAddNewTodoItem: (newTodoItem: string) => void;
  currentTodo: string;
  handleInputChange: (newTodoItem: ChangeEvent<HTMLInputElement>) => void;
}

export function Form({ handleAddNewTodoItem, currentTodo, handleInputChange }: Props) {
  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>): void {
    if (currentTodo !== '') {
      if (event.key === 'Enter') {
        event.preventDefault();
        handleAddNewTodoItem(currentTodo);
      }
      return;
    }
    return;
  }

  return (
    <div className={styles.form} onKeyDown={handleKeyDown}>
      <input 
        value={currentTodo}
        onChange={handleInputChange}
        className={styles.input} 
        type="text"
        placeholder="Adicione uma nova tarefa" 
      />

      <button 
        type="button"
        className={styles.submitButton}
        onClick={() => handleAddNewTodoItem(currentTodo)}
        disabled={!currentTodo}
      >
        Criar

        <PlusCircle className={styles.submitIcon} size={16} />
      </button>
    </div>
  )
}