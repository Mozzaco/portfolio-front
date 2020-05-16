import Link from 'next/link';
import s from './contact.module.css';

function Contact() {
  return (
    <div className={s.container}>
      <Link href="/">
        <li>Homepage</li>
      </Link>
      <form className={s.form}>
        <label>
          Firstname:
          <input type="text" name="name" id="name" required />
        </label>
        <label>
          Lastname:
          <input type="text" name="name" id="name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" id="email" required />
        </label>
        <label>
          Message:
          <textarea />
        </label>
      </form>
    </div>
  );
}

export default Contact;
