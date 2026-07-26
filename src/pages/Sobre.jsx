import styles from './Sobre.module.css'
import Sobre from './pages/Contato'

function Sobre() {
  return (
    <div className={styles.sobre}>
      <h1>Sobre</h1>
      <img src="{sobreGIF} " alt="" className={styles.gif} />
    </div>
  )
}

export default Sobre
