import './index.css'

const Footer=()=>{ 
    return( 
        <div className="footer-container">
        <div className='footer-content-container'>
            <div>
                <h1 className='company-logo'>Carbon Cell</h1>
                <img className="water-drop-img" src="https://res.cloudinary.com/dtcogqxhp/image/upload/v1712908325/39913_dszdft.jpg"/>
            </div>
        
            <div className="footer-links">
                    <h4 className='footer-heading'>Resources</h4>
                    <ul className='footer-unordered-list-container'>
                    <li>Blogs</li>
                    <li>Introduction</li>
                    </ul>
            </div>

            <div className="footer-links">
                    <h4 className='footer-heading'>Company</h4>
                    <ul className='footer-unordered-list-container'>
                    <li>About Us</li>
                    <li>Build with Us</li>
                    </ul>
            </div>
        </div>
        <div class="copyright-text">
          © 2000-2024 <strong></strong>. All Rights Reserved
        </div>
    </div>
    )}

    export default Footer
