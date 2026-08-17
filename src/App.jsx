import { useState } from 'react'
import './App.css'

const services = [
  {
    name: 'МУЖСКАЯ СТРИЖКА',
    description: 'Консультация, форма, окантовка и укладка.',
    price: 'ЦЕНА ПОСЛЕ СОГЛАСОВАНИЯ',
  },
  {
    name: 'СТРИЖКА + БОРОДА',
    description: 'Полный образ: волосы, борода и финальная укладка.',
    price: 'ЦЕНА ПОСЛЕ СОГЛАСОВАНИЯ',
  },
  {
    name: 'ОФОРМЛЕНИЕ БОРОДЫ',
    description: 'Форма, контур и аккуратная работа с длиной.',
    price: 'ЦЕНА ПОСЛЕ СОГЛАСОВАНИЯ',
  },
]

const masters = [
  {
    number: '01',
    name: 'МАСТЕР',
    role: 'СТАРШИЙ БАРБЕР',
    image:
      'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1000&q=85',
  },
  {
    number: '02',
    name: 'МАСТЕР',
    role: 'БАРБЕР',
    image:
      'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1000&q=85',
  },
]

const works = [
  'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1000&q=85',
  'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1000&q=85',
  'https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?auto=format&fit=crop&w=1000&q=85',
  'https://images.unsplash.com/photo-1593702295094-aea9c3c9a9f9?auto=format&fit=crop&w=1000&q=85',
]

function App() {
  const [bookingOpen, setBookingOpen] = useState(false)

  const openBooking = () => {
    setBookingOpen(true)
  }

  const closeBooking = () => {
    setBookingOpen(false)
  }

  const submitBooking = (event) => {
    event.preventDefault()
    alert(
      'Это демонстрационная форма записи. После согласования с владельцем подключим настоящую онлайн-запись.'
    )
  }

  return (
    <div className="ev-site">

      <header className="navbar">
        <a className="brand" href="#home">
          EV<span>BARBER</span>
        </a>

        <nav>
          <a href="#services">Услуги</a>
          <a href="#masters">Мастера</a>
          <a href="#works">Работы</a>
          <a href="#about">О нас</a>
          <a href="#contacts">Контакты</a>
        </nav>

        <button className="booking-small" onClick={openBooking}>
          Записаться
        </button>
      </header>


      <main>

        <section id="home" className="hero">

          <div className="hero-background" />

          <div className="hero-content">

            <p className="eyebrow">
              BARBER STUDIO · SAINT PETERSBURG
            </p>

            <h1>
  МУЖЧИНА
  <br />
  НАЧИНАЕТСЯ
  <br />
  <span>С ГОЛОВЫ.</span>
</h1>

<p className="hero-subtitle">
  В прямом смысле.
</p>

            <p className="hero-description">
              Современный мужской барбершоп,
              где стрижка начинается с разговора,
              а заканчивается образом, который подходит именно тебе.
            </p>

            <div className="hero-actions">
              <button className="main-button" onClick={openBooking}>
                Записаться
                <span>↗</span>
              </button>

              <a className="outline-button" href="#services">
                Смотреть услуги
              </a>
            </div>

          </div>

          <div className="hero-meta">
            <span>Гороховая 66</span>
            <span>+7 999 059-14-37</span>
          </div>

          <div className="hero-index">
            001 / EV
          </div>

        </section>


        <section id="services" className="section services">

          <div className="section-head">
            <span>01 / УСЛУГИ</span>

            <h2>
              ЧТО
              <br />
              ДЕЛАЕМ
            </h2>

            <p>
              Пока это демонстрационная версия.
              Финальный список услуг и цены можно
              заменить на реальные данные студии.
            </p>
          </div>

          <div className="service-list">

            {services.map((service, index) => (
              <article className="service" key={service.name}>

                <div className="service-number">
                  0{index + 1}
                </div>

                <div className="service-main">
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                </div>

                <div className="service-price">
                  {service.price}
                </div>

                <button onClick={openBooking}>
                  →
                </button>

              </article>
            ))}

          </div>

        </section>


        <section id="masters" className="section masters">

          <div className="section-head">
            <span>02 / КОМАНДА</span>

            <h2>
              ТВОЙ
              <br />
              <span>БАРБЕР.</span>
            </h2>
          </div>

          <div className="masters-grid">

            {masters.map((master) => (
              <article className="master" key={master.number}>

                <div className="master-image">
                  <img src={master.image} alt={master.name} />

                  <span>{master.number}</span>
                </div>

                <div className="master-info">
                  <div>
                    <h3>{master.name}</h3>
                    <p>{master.role}</p>
                  </div>

                  <button onClick={openBooking}>
                    Записаться →
                  </button>
                </div>

              </article>
            ))}

          </div>

          <p className="demo-note">
            Фотографии и имена мастеров на этом макете — временные.
            Здесь будут реальные фотографии команды EV Barber.
          </p>

        </section>


        <section id="works" className="section works">

          <div className="section-head">
            <span>03 / ПОРТФОЛИО</span>

            <h2>
              РАБОТЫ
              <br />
              <span>МАСТЕРОВ.</span>
            </h2>
          </div>

          <div className="works-grid">

            {works.map((image, index) => (
              <div className={`work work-${index + 1}`} key={image}>
                <img src={image} alt={`Работа барбера ${index + 1}`} />
              </div>
            ))}

          </div>

          <p className="demo-note">
            Здесь можно разместить реальные фотографии работ
            из Telegram или соцсетей студии.
          </p>

        </section>


        <section id="about" className="about">

          <div className="about-number">
            04
          </div>

          <div className="about-copy">

            <span>О СТУДИИ</span>

            <h2>
              МЕСТО,
              <br />
              КУДА
              <br />
              <i>ВОЗВРАЩАЮТСЯ.</i>
            </h2>

            <p>
              EV Barber — это пространство для тех,
              кто ценит аккуратную работу, хороший сервис
              и отсутствие лишнего пафоса.
            </p>

            <button className="main-button" onClick={openBooking}>
              Забронировать время
              <span>↗</span>
            </button>

          </div>

          <div className="about-quote">
            <div>EV</div>
            <p>
              YOUR STYLE.
              <br />
              YOUR CHOICE.
            </p>
          </div>

        </section>


        <section id="contacts" className="contacts">

          <div className="contacts-inner">

            <span>05 / КОНТАКТЫ</span>

            <h2>
              УВИДИМСЯ
              <br />
              <i>В СТУДИИ.</i>
            </h2>

            <div className="contact-columns">

              <div className="contact-item">
                <small>АДРЕС</small>
                <strong>
                  Санкт-Петербург,
                  <br />
                  Гороховая, 66
                </strong>
              </div>

              <div className="contact-item">
                <small>ТЕЛЕФОН</small>

                <a href="tel:+79990591437">
                  +7 999 059-14-37
                </a>
              </div>

              <div className="contact-item">
                <small>ЗАПИСЬ</small>

                <button onClick={openBooking}>
                  Выбрать время →
                </button>
              </div>

            </div>

          </div>

        </section>

      </main>


      <footer>

        <div className="brand">
          EV<span>BARBER</span>
        </div>

        <p>
          КОНЦЕПТ САЙТА · 2026
        </p>

        <a href="tel:+79990591437">
          +7 999 059-14-37
        </a>

      </footer>


      {bookingOpen && (
        <div className="modal-overlay" onClick={closeBooking}>

          <div
            className="booking-modal"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              className="modal-close"
              onClick={closeBooking}
            >
              ×
            </button>

            <span className="modal-label">
              ONLINE BOOKING
            </span>

            <h2>
              ЗАПИСЬ
              <br />
              <span>В СТУДИЮ.</span>
            </h2>

            <form onSubmit={submitBooking}>

              <label>
                УСЛУГА
                <select required>
                  <option value="">Выберите услугу</option>
                  <option>Мужская стрижка</option>
                  <option>Стрижка + борода</option>
                  <option>Оформление бороды</option>
                </select>
              </label>

              <label>
                МАСТЕР
                <select required>
                  <option value="">Выберите мастера</option>
                  <option>Мастер 01</option>
                  <option>Мастер 02</option>
                </select>
              </label>

              <label>
                ИМЯ
                <input
                  type="text"
                  placeholder="Ваше имя"
                  required
                />
              </label>

              <label>
                ТЕЛЕФОН
                <input
                  type="tel"
                  placeholder="+7 999 000-00-00"
                  required
                />
              </label>

              <button className="submit-button" type="submit">
                ПРОДОЛЖИТЬ →
              </button>

            </form>

            <p className="modal-note">
              Демонстрация будущей системы записи.
            </p>

          </div>

        </div>
      )}

    </div>
  )
}

export default App