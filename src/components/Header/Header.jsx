import Link from 'next/link';
import s from './Header.module.scss';

const Header = () => {
  return (
    <header className={s.header}>
      <nav>
        <ul>
          <li>
            <Link href="/">Главная</Link>
          </li>
          <li>
            <Link href="/notes">Записи</Link>
          </li>
          <li>
            <Link href="/contacts">Контакты</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
