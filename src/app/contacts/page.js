import Link from 'next/link';
import s from './contact.module.scss';

export default function Contacts() {
  return (
    <main className={s.contacts}>
      <div className={s.container}>
        <h1>Наши контакты</h1>
        <ul>
          <li>Почта: kingvlad3008@gmail.com</li>
          <li>Телефон: +7 9879837901</li>
          <li>
            Группа Vk:
            <Link href="https://vk.com/club225773578">
              https://vk.com/club225773578
            </Link>
          </li>
          <li>
            Группа Vk:
            <Link href="https://vk.com/club225773578">
              https://vk.com/club225773578
            </Link>
          </li>
          <li>
            Группа Telegram:
            <Link href="https://t.me/kingking3008">
              https://t.me/kingking3008
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
