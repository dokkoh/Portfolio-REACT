import './style.scss';
import kitsunecontact from '../images/Dokkoh_contact.png';
import { Link } from 'react-router-dom';
import ati from '../images/ati.png';
import sigma from '../images/sigma.png';
function Contact() {
    return (
        <>
            <section role='region' id='contact' className='section'>
                <h2 className='section__title'>Me contacter</h2>
                <div className='section__contact__container'>
                    <div className='section__contact__container__left'>
                        <p className='section__contact__container__left__info'>Pour échanger rapidement, rien de plus simple</p>
                        <a className='section__contact__container__left__mail' href="mailto:clergeaud.jeremy@gmail.com">clergeaud.jeremy.com</a>
                        <div className='section__contact__container__left__icon'>
                            <Link className='section__contact__container__link' to="https://github.com/dokkoh" target='_blank'><i class="devicon-github-original-wordmark"></i></Link>
                        </div>

                    </div>
                    <div className='section__contact__container__right'>
                        <img className='contact__img' src={kitsunecontact} alt="" />
                    </div>
                </div>
            </section>
            <section role='region' id='contact' className='section'>
                <h2 className='section__title'>Témoignages</h2>
                <div className='section__testimonial__container'>
                    <div className='section__testimonial__container__left'>
                        <img className='section__testimonial__img' src={sigma} alt="" />
                        <p className='section__testimonial__container__desc'>
                            " j’ai pu apprécier les qualités humaines de Jérémy mais surtout sa capacité à être autonome et apprendre rapidement une technologie pour satisfaire aux besoins imposés par notre socle technique. "
                        </p>
                        <p className='section__testimonial__container__desc'>
                            " Jérémy a su faire preuve d’initiative, d’autonomie mais fu également de bons conseils apportant à mon entreprise un savoir-vivre d’une grande qualité. "
                        </p>
                        <p className='section__testimonial__container__desc'>
                            " Ses savoir-faire sont variés et son principal atout est sa capacité d’apprentissage que se soit au niveau de la méthode que de la technique ".
                        </p>
                        <div className='container__company'>
                            <p>RIBOT Gabriel - Directeur - <Link className='company' to="https://www.sigma-vision.com/fr/" target='_blank'>SIGMA-VISION</Link></p>
                        </div>

                    </div>
                    <div className='section__testimonial__container__right'>
                        <img className='section__testimonial__img' src={ati} alt="" />
                        <p className='section__testimonial__container__desc'>
                            " Tout au long du projet Apéro Dev, Jérémy s'est avéré être un atout majeur. Son expertise technique en développement web, notamment en ce qui concerne les technologies de pointe et les meilleures pratiques en matière de développement, a été indiscutable. "
                        </p>
                        <p className='section__testimonial__container__desc'>
                            " Il a fait preuve d'une grande créativité pour résoudre les défis qui se sont présentés et s'est constamment efforcé de fournir des solutions novatrices et de haute qualité. "
                        </p>
                        <p className='section__testimonial__container__desc'>
                            " Sa capacité à communiquer de manière efficace et à s'adapter rapidement aux retours d'information a grandement contribué à l'avancement fluide du projet. "
                        </p>
                        <div className='container__company'>
                            <p>LEMNOS Cannelle - Chargée de communication - <Link className='company' to='https://ati4group.com/' target='_blank'>ATI4Group</Link></p>
                        </div>

                    </div>
                </div>
            </section >
        </>

    );
}

export default Contact;


