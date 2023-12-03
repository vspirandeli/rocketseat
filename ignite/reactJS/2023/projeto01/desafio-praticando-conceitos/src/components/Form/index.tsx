import { PlusCircle } from '@phosphor-icons/react';

import styles from './form.module.css';

export function Form() {
  return (
    <form className={styles.form}>
      <input 
        className={styles.input} 
        type="text"
        placeholder="Adicione uma nova tarefa" 
        required
      />

      <button className={styles.submitButton} type="submit">
        Criar

        <PlusCircle className={styles.submitIcon} size={16} />
      </button>
    </form>
  )
}