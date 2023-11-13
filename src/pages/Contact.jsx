import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({name: '', email: '', message: ''});
  const [isLoading, setIsLoading] = useState(false);

  const handleValueChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleFocus = (e) => {};
  const handleBlur = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: 'Yash',
        from_email: form.email,
        to_email: 'yashwanthhs07@gmail.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
    ).then((result) => {
      setIsLoading(false);
      setForm({name: '', email: '', message: ''});
      alert('Message sent successfully!');
    }).catch((error) => {
      setIsLoading(false);
      console.log("error", error, form);
      alert('Something went wrong, please try again!');
    });
  };

  return (
    <section className="flex relative lg:flex-row flex-col max-container">
      <div className="flex flex-1 flex-col min-w-[50%]">
        <h1 className="head-text">Get in Touch</h1>
        <form 
        className="w-full flex flex-col gap-6 mt-14"
        onSubmit={handleSubmit}
        >
          <label className="text-black-500 ">
            Name
            <input
            type="text"
            name="name"
            className='input'
            placeholder="Jack"
            required
            value={form.name}
            onChange={handleValueChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 ">
            Email
            <input
            type="email"
            name="email"
            className='input'
            placeholder="jack@gmail.com"
            required
            value={form.email}
            onChange={handleValueChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 ">
            Your Message
            <textarea
            name="message"
            rows={4}
            className='textarea'
            placeholder="How I can help!"
            required
            value={form.message}
            onChange={handleValueChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
          </label>
          <button
          type="submit"
          className="btn"
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact