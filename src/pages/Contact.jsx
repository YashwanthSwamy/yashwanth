import { Suspense, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import {Canvas} from '@react-three/fiber';
import Fox from '../models/Fox';
import Loader from '../components/Loader';
import UseAlerts from '../hooks/UseAlerts';
import Alert from '../components/Alert';
import { socialLinks } from '../constants';

const Contact = () => {
  const {alert, showAlert, hideAlert} = UseAlerts();

  const formRef = useRef();
  const [form, setForm] = useState({name: '', email: '', message: ''});
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('idle');

  const handleValueChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleFocus = () => setCurrentAnimation('walk');
  const handleBlur = () => setCurrentAnimation('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('hit')
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
      showAlert({msg: 'Message sent successfully!', type: 'success'});
      setTimeout(() => {
        setCurrentAnimation('idle');
        setForm({name: '', email: '', message: ''});
        hideAlert();
      }, 3000);
    }).catch((error) => {
      setCurrentAnimation('idle');
      setIsLoading(false);
      console.log("error", error, form);
      showAlert({msg: "Didn't receive your message, please try again!", type: 'danger'});
    });
  };

  return (
    <section className=" max-container">
      {alert.show && <Alert {...alert} />}
      <div className='flex relative lg:flex-row flex-col'>

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
      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[330px] lg:ml-32'>
        <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 75,
          near: 0.1,
          far: 1000
        }}
        >
          <directionalLight intensity={2.5} position={[0, 0, 1]}/>
          <ambientLight intensity={0.75}/>
          <Suspense fallback={<Loader />}>
            <Fox 
            position={[0.5, 0.35, 0]}
            rotation={[12.7, -0.6, 0]}
            scale={[0.6, 0.6, 0.6]}
            currentAnimation={currentAnimation}
            />
          </Suspense>
        </Canvas>
      </div>
      </div>

      <hr className="border-slate-200 mt-12"/>
      <div className="flex flex-row gap-6 justify-center mt-4">
          {socialLinks.map((link, index) => (
            <Link  to={link.link}
            target="_blank" rel="noopener noreferrer"
            className="block-container w-12 h-12 " 
            key={`${link.name}-${index}`}
            >
              <div className="btn-back rounded-xl"/>
              <div className="btn-front rounded-xl justify-center items-center flex flex-row ">
                <img src={link.iconUrl} alt={link.name} className="w-1/2 h-1/2 object-contain" />
              </div>
            </Link>
          ))}
      </div>

    </section>
  )
}

export default Contact