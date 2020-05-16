function Contact() {
  return (
    <div>
      <form>
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
