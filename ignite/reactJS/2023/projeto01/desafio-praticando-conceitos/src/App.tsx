import { AmmountCounter } from "./components/AmmountCounter";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { TodoItem } from "./components/TodoItem";

import styles from './styles/App.module.css';
import './styles/global.css';

function App() {
  return (
    <main>
      <Header />

      <Form />

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

        <div className={styles.listContent}>
          {/* <TodoEmptyList /> */}
          <TodoItem />
          <TodoItem />
        </div>
      </section>
    </main>
  )
}

export default App;