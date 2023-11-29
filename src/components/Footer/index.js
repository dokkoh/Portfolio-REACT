import './style.scss';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer role='contentinfo' className='footer'>
            <span className='footer__elt__small'>Accessibilité : non conforme, en cours de réalisation</span>
            <span className='footer__elt'>© 2023 Dokkoh Développement</span>
            <span className='footer__elt'><Link to="/plan">Plan du site</Link></span>
            <span className='footer__elt'><Link to="/legal-notice">Mentions Légales</Link></span>    
        </footer>
        
    );
}

export default Footer;