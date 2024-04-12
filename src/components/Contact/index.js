import './index.css'
import { RiLinkedinLine,RiTwitterFill ,RiFacebookFill } from "react-icons/ri";

const Contact=()=>{ 
    return ( 
       
    <div id="contact" className='contact-us-section-container'>
        <h1 className='contact-us-heading'>Contact Us</h1>
        <div className='social-media-icons-container'>
            <div className='social-media-icon-container'><RiLinkedinLine className='social-media-icon' /></div>
            <div className='social-media-icon-container'><RiTwitterFill className='social-media-icon'/></div>
            <div className='social-media-icon-container'><RiFacebookFill className='social-media-icon'/></div>
        </div>
    </div>

)
}
export default Contact