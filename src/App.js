import { BrowserRouter  } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import './App.css';
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

const App=()=>(
  
    
     <BrowserRouter>
     <div className='sidebar-and-content-container'>
        <Sidebar />
        <div>
          <Home/>
          <About/>
        <Contact/>
        </div>
    </div>
    <Footer/>
    </BrowserRouter> 
  
)

export default App;
