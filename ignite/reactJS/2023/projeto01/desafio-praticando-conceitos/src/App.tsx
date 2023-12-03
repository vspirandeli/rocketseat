import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";

import './styles/global.css';

function App() {
  return (
    <main>
      <Header />

      <Form />

      <TodoList />
    </main>
  )
}

export default App;