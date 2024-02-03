import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Home, About, Projects, Contact } from './pages';

const scrollFunction = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

const App = () => {
    return (
        <main className='bg-slate-300/20 h-auto lg:w-full md:w-full '>
            <Router>
                <div className='sticky top-0 z-10'>

                    <Navbar />
                </div>
                <Routes>
                    <Route path='/' element={<About />} />
                    {/* <Route  path='/about' element={<About/>}/> */}
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
                <Footer />
            </Router>
        </main>
    )
}

export default App;