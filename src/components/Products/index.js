import styles from './Products.module.css';

export default function Products() {
  return (
    <div className={styles.productContainer}>
      <section id='Products' className={styles.productSection}>
        <div className={styles.titleProduct}>
          <h2>Nossos Produtos</h2>
          <p>Conheça nossos produtos</p>
          <p>As Melhores Marcas Você Encontra Aqui!</p>
        </div>

        <div className={styles.productGrid}>
          {/* Produto 1 */}
          <div className={styles.card_product}>
            <span className={styles.stampNovo}>Novo!</span>
            <picture>
              <img src="./produto1.jpeg" alt="Air Max 95"/>
            </picture>
            <h3>Air Max 95' OG</h3>
            <p className={styles.price}>R$ 899,90</p>
            <button className={styles.button}>Comprar</button>
          </div>

          {/* Produto 2 */}
          <div className={styles.card_product}>
            <span className={styles.stampU}>Última Unidade!</span>
            <picture>
              <img src="./produto2.jpeg" alt="Bone ST"/>
            </picture>
            <h3>Boné Sergio Tacchini</h3>
            <p className={styles.price}>R$ 149,90</p>
            <button className={styles.button}>Comprar</button>
          </div>

          {/* Produto 3 */}
          <div className={styles.card_product}>
            <picture>
              <img src="./produto3.jpeg" alt="Polo ST"/>
            </picture>
            <h3>Polo Sergio Tacchini</h3>
            <p className={styles.price}>R$ 279,90</p>
            <button className={styles.button}>Comprar</button>
          </div>

          {/* Produto 4 */}
          <div className={styles.card_product}>
            <picture>
              <img src="./produto4.jpeg" alt="Jaqueta Juve"/>
            </picture>
            <h3>Jaqueta Juventus 2000</h3>
            <p className={styles.price}>R$ 300,00</p>
            <button className={styles.button}>Comprar</button>
          </div>
        </div>
      </section>
    </div>
  );
}
