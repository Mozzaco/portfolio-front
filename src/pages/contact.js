import Link from 'next/link';
import s from './contact.module.css';

function Contact() {
  return (
    <div className={s.container}>
      <Link href="/">
        <span className={s.close}>X</span>
      </Link>
      <form className={s.form}>
        <label htmlFor="name">
          Name
          <input type="text" name="name" id="name" required className={s.input} />
        </label>
        <label htmlFor="email">
          Email
          <input type="email" name="email" id="email" required className={s.input} />
        </label>
        <label htmlFor="message">
          Message
          <textarea className={s.textarea} />
        </label>
        <input type="submit" value="Send" className={s.submitButton} />
      </form>
    </div>
  );
}

export default Contact;
