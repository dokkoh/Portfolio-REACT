import './style.scss';
import kitsune from '../images/Dokkoh_fox_kitsune-comp-nobg.png';
import RecentArticles from '../articles';

function Intro() {

    return (
        <>
            <section role='region' className='intro'>
                <div className='intro__containermain'>
                    <img className='intro__img' src={kitsune} alt="" />
                    <div className='intro__container'>
                        <h1 className='intro__title' id='accueil'>
                            <span className='intro__title__elt'>Hi,</span>
                            <span className='intro__title__elt'>I’m Dokkoh</span>
                            <span className='intro__title__elt'>&lt; web developer &gt;</span>
                        </h1>
                        <p className='intro__info'>
                            <span className='intro__info__elt'>FRONT-END & BACK-END </span>
                            <span className='intro__info__elt'>ACCESSIBILITÉ ET QUALITÉ </span>
                            <span className='intro__info__elt'>SAVOIR-ÊTRE</span>
                        </p>
                    </div>
                </div>
            </section>
            <RecentArticles />
        </>
    );
}

export default Intro;
