import './style.scss';

function Plan() {

    return (
        <div className='plan-container'>
            <a className='plan-container__link' href="/">Accueil</a>
            <a className='plan-container__link' href="/about">Présentation</a>
            <a className='plan-container__link' href="/skills">Compétences</a>
            <a className='plan-container__link' href="/projects">Réalisations</a>
            <a className='plan-container__link' href="/contact">Contact</a>
            <a className='plan-container__link' href="/legal-notice">Mentions-Légales</a>
        </div>
    );
}

export default Plan;