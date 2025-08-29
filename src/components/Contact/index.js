import styles from './Contact.module.css'

export default function Contact() {
  return (
    <footer id='Contact' className={styles.footer}>
      <div className={styles.contactContainer}>
        <h2>Entre em Contato</h2>
        <p>Fale com a Corre012 e faça parte do corre</p>

        <div className={styles.contactGrid}>
          <div className={styles.contactCard}>
            <h3>Email</h3>
            <p>contato@corre012.com</p>
          </div>
          <div className={styles.contactCard}>
            <h3>Telefone</h3>
            <p>(11) 99999-9999</p>
          </div>
          <div className={styles.contactCard}>
            <h3>Endereço</h3>
            <p>Rua Exemplo, 012 - São Paulo</p>
          </div>
        </div>
      </div>
      <div className={styles.copy}>
        <p>© 2025 Corre012 - Todos os direitos reservados</p>
      </div>
    </footer>
  )
}
