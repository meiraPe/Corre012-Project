import styles from './Products.module.css';

export default function Products() {
  return (
    <div className={styles.productContainer}>
      <section id='Products' className={styles.productSection}>
        <div className={styles.titleProduct}>
          <h2>Nossos Produtos</h2>
          <p>Conheça nossos produtos</p>
          <p>
            As Melhores Marcas Você Encontra Aqui!
          </p>

        {/* Produto 1 */}
          <div className={styles.product_img}>
            <div className={styles.card_product}>
              <span className={styles.stampNovo}>Novo!</span>
              <h3>Air Max 95' OG</h3>
              <picture>
                <img src="./produto1.jpeg" alt="Air Max 95"/>
              </picture> 
                <p className={styles.price}>R$ 899,90</p>
                <button className={styles.button}>Comprar</button>
            </div>

          {/* Produto 2 */}
            <div className={styles.card_product}>
              <span className={styles.stampU}>Última Unidade!</span>
              <h3>Boné Sergio Tacchini</h3>
              <picture>
                <img src="./produto2.jpeg" alt="BoneST"/>
              </picture> 
                <p className={styles.price}>R$ 149,90</p>
                <button className={styles.button}>Comprar</button>
            </div>

          {/* Produto 3 */}
            <div className={styles.card_product}>
              <h3>Polo Sergio Tacchini</h3>
              <picture>
                <img src="./produto3.jpeg" alt="PoloST"/>
              </picture> 
                <p className={styles.price}>R$ 279,90</p>
                <button className={styles.button}>Comprar</button>
            </div>

          {/* Produto 4 */}
            <div className={styles.card_product}>
              <h3>Jaqueta Juventus 2000</h3>
              <picture>
                <img src="./produto4.jpeg" alt="JaquetaJuve"/>
              </picture> 
                <p className={styles.price}>R$ 300,00</p>
                <button className={styles.button}>Comprar</button>
            </div>

          </div>
          
        </div>
      </section>
    </div>
  );
}