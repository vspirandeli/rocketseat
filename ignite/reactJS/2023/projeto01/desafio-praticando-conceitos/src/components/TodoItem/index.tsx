import styles from './todoItem.module.css';

import { Check, Trash } from '@phosphor-icons/react';

export function TodoItem() {
  const isChecked = true;

  return (
    <div className={styles.itemContainer}>
      <label className={isChecked ? styles.checkboxChecked : ''} htmlFor="todo">
        <input type="checkbox" name="todo" id="todo" />
        {isChecked && <Check size={15} className={styles.icon} />}
      </label>

      <div className={styles.todoContent}>
        <span className={isChecked ? styles.contentChecked : ''}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>
      </div>

      <button className={styles.deleteButton} type="button">
        <Trash size={16} />
      </button>
    </div>
  );
}

