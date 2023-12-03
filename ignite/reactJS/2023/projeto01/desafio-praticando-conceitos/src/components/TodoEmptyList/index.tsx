import styles from './todoEmptyList.module.css';

import ClipboardIcon from '../../assets/Clipboard.svg';

export function TodoEmptyList() {
  return (
    <div className={styles.listContainer}>
      <img src={ClipboardIcon} alt="Ícone de uma prancheta de tarefas" />

      <strong>Você ainda não tem tarefas cadastradas</strong>

      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}