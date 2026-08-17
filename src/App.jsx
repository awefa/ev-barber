import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">DETAIL<span>CUSTOMS</span></div>

        <nav>
          <a href="#services">Услуги</a>
          <a href="#works">Работы</a>
          <a href="#about">О нас</a>
          <a href="#contacts">Контакты</a>
        </nav>

        <a className="header-button" href="#contacts">
          Записаться
        </a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="hero-label">DETAILING • PROTECTION • STYLE</p>

            <h1>
              ВАШ АВТОМОБИЛЬ.
              <br />
              <span>НАШ ПОДХОД.</span>
            </h1>

            <p className="hero-description">
              Профессиональный детейлинг и защита автомобилей
              в Санкт-Петербурге.
            </p>

            <a className="hero-button" href="#services">
              Смотреть услуги
            </a>
          </div>
        </section>

        <section className="services" id="services">
          <div className="section-heading">
            <p>ЧТО МЫ ДЕЛАЕМ</p>
            <h2>Услуги</h2>
          </div>

          <div className="services-grid">
            <article className="service-card">
              <span>01</span>
              <h3>Детейлинг</h3>
              <p>
                Глубокая очистка и уход за автомобилем с вниманием
                к каждой детали.
              </p>
            </article>

            <article className="service-card">
              <span>02</span>
              <h3>Полировка</h3>
              <p>
                Восстановление блеска кузова и удаление мелких
                дефектов лакокрасочного покрытия.
              </p>
            </article>

            <article className="service-card">
              <span>03</span>
              <h3>Керамика</h3>
              <p>
                Защитное покрытие, которое сохраняет внешний вид
                автомобиля и облегчает уход.
              </p>
            </article>

            <article className="service-card">
              <span>04</span>
              <h3>Плёнка</h3>
              <p>
                Защита кузова от сколов, царапин и других
                повреждений.
              </p>
            </article>
          </div>
        </section>

        <section className="about" id="about">
          <div>
            <p className="section-label">DETAILCUSTOMS</p>
            <h2>Автомобиль должен выглядеть так, будто он только что вышел из салона.</h2>
          </div>

          <p>
            Мы занимаемся профессиональным уходом за автомобилями,
            используя современные материалы и оборудование.
            Наша задача — сохранить внешний вид автомобиля
            и подчеркнуть его характер.
          </p>
        </section>

        <section className="works" id="works">
          <div className="section-heading">
            <p>НАШИ РАБОТЫ</p>
            <h2>До и после</h2>
          </div>

          <div className="works-placeholder">
            <p>Здесь будет галерея автомобилей</p>
          </div>
        </section>

        <section className="contacts" id="contacts">
          <div>
            <p className="section-label">ГОТОВЫ НАЧАТЬ?</p>
            <h2>Вернём автомобилю его лучший вид.</h2>
          </div>

          <a className="contact-button" href="tel:+79219066009">
            Позвонить нам
          </a>
        </section>
      </main>

      <footer>
        <div className="logo">DETAIL<span>CUSTOMS</span></div>
        <p>Санкт-Петербург · Шателена, 9</p>
      </footer>
    </div>
  );
}

export default App;