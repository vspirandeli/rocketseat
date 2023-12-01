import { ThumbsUp, Trash } from 'phosphor-react';

import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export function Comment({ content, onDeleteComment  }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  // XXX: Sempre que for atualizar um state utilizando seu valor atual. Utilizar nesse formato, para sempre obter o último valor do state.
  function handleLikeCount() {
    setLikeCount((state) => {
      return state + 1;
    });
  }
  
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/vspirandeli.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Victor Spirandeli</strong>

              <time title="11 de Maio às 08:11h" dateTime="2023-05-11 08:11:08">Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentério">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeCount} title="Aplaudir">
            <ThumbsUp size={20} />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}