import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { TodoItem } from "./components/TodoItem";
import { TodoEmptyList } from "./components/TodoEmptyList";
import { AmmountCounter } from "./components/AmmountCounter";

import './styles/global.css';
import styles from './styles/App.module.css';
import 'react-toastify/dist/ReactToastify.css';

interface ITodoItem {
  content: string;
  isCompleted: boolean;
}

function App() {
  const [todoList, setTodoList] = useState<ITodoItem[]>([]);
  const [currentTodo, setCurrentTodo] = useState<string>('');

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setCurrentTodo(event.target.value);
  }

  function checkDuplicateContent(content: string): boolean {
    const undoneList = todoList.filter(todoItem => !todoItem.isCompleted);
    
    return undoneList.some(todoItem => todoItem.content.toLowerCase() === content.toLowerCase());
  }

  function handleAddNewTodoItem(newTodoItem: string): void {
    const isDuplicateContent = checkDuplicateContent(newTodoItem);

    if (isDuplicateContent) {
      toast.error('Já existe uma tarefa igual a essa cadastrada!');
      return;
    }

    setTodoList([...todoList, {
      content: newTodoItem,
      isCompleted: false,
    }]);
    setCurrentTodo('');

    toast.success('Tarefa adicionada com sucesso!');
  }

  function handleToggleTodoItemCompletion(todoItem: ITodoItem): void {
    setTodoList(
      todoList.map(item => item.content === todoItem.content ? {
        ...item,
        isCompleted: !item.isCompleted,
      } : item)
    );
  }

  function handleRemoveTodoItem(todoItem: ITodoItem): void {
    const isConfirmed = window.confirm(`Tem certeza que deseja remover a seguinte tarefa?\n${todoItem.content}`);
    const totalTasks = todoList.length;

    if (isConfirmed) {
      setTodoList(todoList.filter(item => item.content !== todoItem.content));
      const newTasksAmmount = todoList.length;

      if (newTasksAmmount === totalTasks - 1) {
        toast.error('Não foi possível remover a tarefa!');
        return;
      } else {
        toast.success('Tarefa removida com sucesso!');
        return;
      }
    }

    return;
  }

  function calculateTasks(): string {
    const tasks = todoList.length;

    return String(tasks);
  }

  function calculateCompletedTasks(): string {
    const completedTasks = todoList.filter(todoItem => todoItem.isCompleted).length;
    const allTasksAmmount = todoList.length;

    if (allTasksAmmount === 0) {
      return '0';
    }

    return `${completedTasks} de ${allTasksAmmount}`;
  }
  
  return (
    <main>
      <ToastContainer />

      <Header />

      <Form 
        handleAddNewTodoItem={handleAddNewTodoItem} 
        currentTodo={currentTodo} 
        handleInputChange={handleInputChange}
      />

      <section className={styles.todoContainer}>
        <header className={styles.header}>
          <div className={styles.counterContainer}>
            <span>Tarefas criadas</span>
            <AmmountCounter ammount={calculateTasks()} />
          </div>

          <div className={styles.counterContainer}>
            <span>Concluídas</span>
            <AmmountCounter ammount={calculateCompletedTasks()} />
          </div>
        </header>

        <div className={styles.listContent}>
          {!todoList || todoList.length < 1 ? (
            <TodoEmptyList />
          ) : (
            todoList.map(todoItem => (
              <TodoItem 
                key={todoItem.content} 
                todoItem={todoItem}
                handleToggleTodoItemCompletion={handleToggleTodoItemCompletion}
                handleRemoveTodoItem={handleRemoveTodoItem}
              />
            ))
          )}
        </div>
      </section>
    </main>
  )
}

export default App;