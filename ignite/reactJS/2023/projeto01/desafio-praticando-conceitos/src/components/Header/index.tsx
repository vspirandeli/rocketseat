import styles from './header.module.css';

import RocketImage from '../../assets/rocket.svg';
import TodoImage from '../../assets/todo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.rocketImage}
          src={RocketImage} 
          alt="Vetor de um foguete, como se ele estivesse voando. Foguete cor azul claro e os traços representando o fogo, que o impulsiona em um tom de roxo claro" 
        />
      
        <img 
          className={styles.todoImage}
          src={TodoImage} 
          alt="Palavra 'TODO' escrita em formato de vetor, com as letras 'to' em um tom de azul claro, mesmo tom que o foguete da imagem ao lado e as letas: 'do' em um tom de roxo claro, também mesmo tom que o fogo do foguete" 
        />
      </div>
    </header>
  )
}