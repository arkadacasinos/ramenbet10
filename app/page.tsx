const searchPhrases = [
  '#Ramenbet',
  '#раменбет',
  '#RamenbetЗеркало',
  '#раменбетзеркало',
  '#RamenbetОфициальныйСайт',
  '#раменбетрабочеезеркало',
  '#RamenbetКазино',
  '#раменбетказино',
]

export default function Page() {
  return (
    <main className="rb-shell">
      <section className="rb-hero" aria-labelledby="hero-title">
        <div className="rb-hero-copy">
          <p className="rb-kicker"><span className="rb-mark" aria-hidden="true">R</span> Ramenbet / навигация для игрока</p>
          <h1 id="hero-title">Ramenbet: быстрый путь к игре без лишних поисков</h1>
          <p className="rb-lead">Понятный обзор для тех, кто ищет Ramenbet, рабочее зеркало и официальный сайт. Собрали главное в одном месте: как проверить адрес, зайти с телефона и играть спокойно.</p>
          <div className="rb-actions" aria-label="Основные действия">
            <a className="rb-primary" href="#guide">Открыть инструкцию <span aria-hidden="true">→</span></a>
            <a className="rb-secondary" href="#about">Что важно знать</a>
          </div>
          <dl className="rb-facts" aria-label="Коротко о странице">
            <div><dt>Формат</dt><dd>коротко и по делу</dd></div>
            <div><dt>Доступ</dt><dd>с телефона и ПК</dd></div>
          </dl>
        </div>
        <figure className="rb-hero-art">
          <img src="/ramenbet-hero.png" alt="Игровой стол с рулеткой и картами в золотом свете" />
          <figcaption>Атмосфера Ramenbet — игра начинается с понятного входа.</figcaption>
        </figure>
      </section>

      <section className="rb-section rb-intro" id="about" aria-labelledby="about-title">
        <div className="rb-section-heading">
          <p className="rb-eyebrow">01 / ориентир</p>
          <h2 id="about-title">Ramenbet официальный сайт: как найти нужную страницу</h2>
        </div>
        <div className="rb-copy">
          <p>Если в поиске появляется запрос Ramenbet официальный сайт, не спешите открывать первую попавшуюся ссылку. Смотрите на точное написание бренда, защищённое соединение и аккуратную страницу входа. Официальный сайт Ramenbet обычно открывается без странных перенаправлений, просит только стандартные данные и понятно показывает разделы казино.</p>
          <p>Поисковые фразы «раменбет» и «Ramenbet» ведут к одному бренду, но результаты могут отличаться по региону. Поэтому проверяйте адрес перед авторизацией и не вводите пароль на страницах с подозрительными баннерами. Такой простой шаг помогает сохранить контроль над аккаунтом.</p>
        </div>
      </section>

      <section className="rb-section rb-guide" id="guide" aria-labelledby="guide-title">
        <div className="rb-guide-art">
          <img src="/ramenbet-guide.png" alt="Смартфон рядом с ключом и тёмной картой доступа" loading="lazy" />
        </div>
        <div className="rb-guide-copy">
          <p className="rb-eyebrow">02 / доступ</p>
          <h2 id="guide-title">Ramenbet зеркало: рабочий вход за несколько шагов</h2>
          <p>Когда основной домен не загружается, помогает Ramenbet зеркало — альтернативный адрес с тем же интерфейсом и логикой аккаунта. Запрос «раменбет зеркало» или «Ramenbet рабочее зеркало» часто используют именно для поиска актуального входа. Выбирайте источник, где адрес опубликован полностью и нет обещаний мгновенного выигрыша.</p>
          <ol className="rb-steps">
            <li><strong>Проверьте адрес.</strong> В строке браузера должно быть защищённое соединение.</li>
            <li><strong>Сверьте интерфейс.</strong> Название Ramenbet, меню и форма входа должны выглядеть привычно.</li>
            <li><strong>Войдите без спешки.</strong> Не передавайте код подтверждения другим людям.</li>
          </ol>
        </div>
      </section>

      <section className="rb-section rb-casino" aria-labelledby="casino-title">
        <div className="rb-section-heading">
          <p className="rb-eyebrow">03 / игра</p>
          <h2 id="casino-title">Ramenbet казино: что увидит игрок после входа</h2>
        </div>
        <div className="rb-copy">
          <p>Ramenbet казино рассчитано на быстрый выбор: слоты, настольные игры и разделы с актуальными предложениями находятся в понятном меню. Если вы только знакомитесь с площадкой, начните с правил конкретной игры и установите личный лимит. Ramenbet казино должно оставаться развлечением, а не способом решить финансовые вопросы.</p>
          <p>Запрос «раменбет казино» помогает найти нужный раздел, а «Ramenbet официальный сайт» — проверить источник. Используйте оба ориентира вместе: сначала убедитесь, что попали на настоящий адрес, затем изучите условия бонуса, требования по ставкам и доступные способы поддержки.</p>
        </div>
      </section>

      <aside className="rb-note" aria-label="Ответственная игра">
        <div className="rb-note-dot" aria-hidden="true" />
        <p><strong>Играйте ответственно.</strong> Выбирайте только ту сумму, потерю которой готовы принять, и делайте паузы. Возрастные и региональные ограничения зависят от законодательства.</p>
      </aside>

      <footer className="rb-footer">
        <div>
          <p className="rb-footer-brand"><span className="rb-mark" aria-hidden="true">R</span> Ramenbet</p>
          <p className="rb-footer-note">Навигация по ключевым запросам и полезным шагам для игрока.</p>
        </div>
        <nav className="rb-tags" aria-label="Поисковые фразы">
          {searchPhrases.map((phrase) => <a href="#about" key={phrase}>{phrase}</a>)}
        </nav>
        <p className="rb-copyright">© 2026 Ramenbet guide</p>
      </footer>
    </main>
  )
}
