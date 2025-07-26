import reactjs from '../assets/Images/reactjs.png'
import github from '../assets/Images/github-mark.svg'

const Footer = () => {
    return (
        <footer>
            <p>Special thanks to zzz.irminsul.gg and hakush.in for the data used on this site.</p>
            <p> All game assets and trademarks are &copy; COGNOSPHERE || All rights reserved.</p>
            <div className='footer-page'>
                <div>Made with: <img src={reactjs} alt="React JS" /></div>
                <div>Visit Me on: <img src={github} alt="Github Page" /></div>
            </div>
        </footer>
    )
}

export default Footer