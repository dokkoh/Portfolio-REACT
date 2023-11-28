import './style.scss';
import imgerror from '../images/page_error.png';
import { Link } from 'react-router-dom';

function Error() {
    return (
        <div className='errorContainer'>
            <div className='errorContainer__left'>
                <img className='errorContainer__img' src={imgerror} alt="" />
            </div>
            <div className='errorContainer__right'>
                <p className='errorContainer__desc__big'>
                404 !
                </p>
                <p className='errorContainer__desc'>
                Oups ! La page que vous recherchez semble introuvable.
                </p>
                <p className='errorContainer__desc'>
                    Il semble que même mon renard farceur se soit égaré ...
                </p>
                <p className='errorContainer__desc'>
                    Il est occupé à discuter avec une carotte quelque part. Laissons le tranquille et retournons à <Link className='errorContainer__link' to="/">l'accueille ! 🦊🥕</Link>
                </p>
            </div>

        </div>
    );
}

export default Error;