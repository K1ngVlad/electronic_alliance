import Image from 'next/image';
import { notes } from './notes.js';

import s from './notes.module.scss';
import { Footer } from '@/components/index.js';

export default function Notes() {
  return (
    <>
      <main className={s.notes}>
        <container className={s.container}>
          <h2 className={s.title}>Записи</h2>
          {notes.map((note, i) => (
            <article className={s.noteItem} key={i}>
              <Image src={note.img} alt={note.name} />
              <h3>{note.name}</h3>
              <p>{note.description}</p>
            </article>
          ))}
        </container>
      </main>
      <Footer />
    </>
  );
}
