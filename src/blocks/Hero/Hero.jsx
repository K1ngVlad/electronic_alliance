import s from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={s.hero}>
      <div className={s.container}>
        <h1 className={s.titleHero}>ЭЛЕКТРОННЫЙ АЛЬЯНС</h1>
        <h2 className={s.textHero}>
          Объединяем экспертов и новичков для великих идей в электронике!
        </h2>
      </div>
    </section>
  );
};

export { Hero };
