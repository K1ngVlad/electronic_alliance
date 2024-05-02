import Link from 'next/link';
import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div>
        Хитрунов В.А.{' '}
        <Link href="https://vk.com/kingvlad3008">
          https://vk.com/kingvlad3008
        </Link>
      </div>
    </footer>
  );
};

export { Footer };
