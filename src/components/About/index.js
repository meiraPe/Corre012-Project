import styles from './About.module.css'

export default function About () {
  return (
    <div className={styles.container}>
      <section id='About' className={styles.aboutSection}>

        <div className={styles.aboutTitle}>
          <h2>Sobre Nós</h2>
          <p>Conheça Nossa História</p>
        </div>

        {/* Bloco 1 */}
        <div className={`${styles.aboutContent} ${styles.reverse}`}>
          <div className={styles.aboutText}>
            <h3>Nossa Essência</h3>
            <p>
              A Corre012 nasceu para representar a cultura urbana e o estilo de vida do corre.
              Nossa missão é trazer produtos originais, de qualidade e cheios de identidade.
            </p>
          </div>
          <picture>
            <img src='./loja.jpeg' alt='Nossa Loja'/>
          </picture>
        </div>

        {/* Bloco 2 */}
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <h3>Nosso Movimento</h3>
            <p>
              Mais que uma loja, somos o movimento que conecta moda, música e atitude.
              A cada coleção, buscamos traduzir o espírito da rua e o corre diário em peças únicas.
            </p>
          </div>
          <picture>
            <img src='./loja2.jpeg' alt='Equipe Corre012'/>
          </picture>
        </div>

      </section>
    </div>
  )
}
