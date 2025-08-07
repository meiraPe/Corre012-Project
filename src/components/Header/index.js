import styles from './Header.module.css'

export default function Header() {
  return (
    <header>
      <div>
          <picture>
              <a href=''><img src='./logo.PNG'/></a>
          </picture>

          <nav>
            <a href='#'>Produtos</a>
            <a href='#'>Sobre</a>
            <a href='#'>Contto</a>
          </nav>
      </div>
    </header>
  )
}