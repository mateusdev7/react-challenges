import styles from '../styles/Title.module.scss'

const Title = ({ title }) => {
  return (
    <div>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
}

export default Title