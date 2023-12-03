import { AmmountCounter } from '../AmmountCounter';
import { TodoEmptyList } from '../TodoEmptyList';
import { TodoItem } from '../TodoItem';

import styles from './todoList.module.css';

export function TodoList() {
  return (
    <section className={styles.todoContainer}>
      <header className={styles.header}>
        <div className={styles.counterContainer}>
          <span>Tarefas criadas</span>
          <AmmountCounter />
        </div>

        <div className={styles.counterContainer}>
          <span>Concluídas</span>
          <AmmountCounter />
        </div>
      </header>

      <main className={styles.listContent}>
        {/* <TodoEmptyList /> */}
        <TodoItem />
        <TodoItem />
      </main>
    </section>
  );
}