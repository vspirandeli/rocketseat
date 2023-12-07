import styles from './ammountCounter.module.css';

interface Props {
  ammount: string;
}

export function AmmountCounter({ ammount }: Props) {
  return (
    <div className={styles.ammountContainer}>
      <span>{ammount}</span>
    </div>
  )
}