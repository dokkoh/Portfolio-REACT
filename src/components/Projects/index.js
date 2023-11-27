import './style.scss';
import apero from '../images/apero_dev.png';
import money from '../images/money_advisor.png';
import cohe from '../images/coherence_cardiaque.png';
import chrono from '../images/chrono.png';
import apigh from '../images/api_github.png';
import symfo from '../images/symfony.jpg';
import pydjan from '../images/python_django.png';

function Projects() {
    return (
        <section role='region' id='realisations' className='sectionwhite'>
            <h2 className='sectionwhite__title'>Réalisations</h2>
            <div className='container-rea'>
                <div className="container-rea__card">
                    <a target='_blank' href="https://github.com/dokkoh/ati4group/tree/main" className="container-rea__card__link">
                        <img src={apero} alt="" className="container-rea__card__img" />
                    </a>
                    <h2 className="container-rea__card__title">Apéro Dev</h2>
                    <p className='container-rea__card__state'>- En cours de Développement -</p>
                    <p className='container-rea__card__state'>- Pour l'entreprise ATI4Group -</p>
                    <p className="container-rea__card__desc">
                        Projet réalisé en stack PERN. Ce projet consiste à créer une plateforme d'inscription conviviale pour l'évènement Apéro Dev. Elle permettra de gérer les inscriptions, de générer des e-billets avec QRcodes et de scanner ces billets le jour de l'événement pour les organisateurs.
                    </p>
                    <p className="container-rea__card__desc">
                        Méthode agile SCRUM, MVP, MCD - MLD - MPD, user stories, wireframe, versioning, architecture MVC, sécurité, accessibilité, formulaires, stockage de médias en cloud, base de données, dashboard d'administration, un projet complet !
                    </p>
                </div>
                <div className="container-rea__card">
                    <a target='_blank' href="https://www.money-advisor.fr/" className="container-rea__card__link">
                        <img src={money} alt="" className="container-rea__card__img" />
                    </a>
                    <h2 className="container-rea__card__title">Money Advisor</h2>
                    <p className='container-rea__card__state'>- En cours de Développement -</p>
                    <p className='container-rea__card__state'>- Pour l'entreprise Sigma-Vision -</p>
                    <p className="container-rea__card__desc">Projet réalisé en PHP et MySQL. Amélioration d'un tableau de bord connecté pour un logiciel en gestion de dépenses personnelles délivré par Windows Store. Le tableau de bord fait partie intégrante de la version gratuite du logiciel, son design UX / UI est déja développé. Développement des composants qui constituent ledit tableau de bord et travail sur la partie communautaire de celui-ci.
                    </p>
                </div>
                <div className="container-rea__card">
                    <a target='_blank' href="https://react-api-github-two.vercel.app/" className="container-rea__card__link">
                        <img src={apigh} alt="" className="container-rea__card__img" />
                    </a>
                    <h2 className="container-rea__card__title">API-Github</h2>
                    <p className='container-rea__card__state'>- En Production -</p>
                    <p className="container-rea__card__desc">
                        Projet REACT utilisatn l'API GitHub, qui consiste à lister des repos GH pour un terme en particulier (par exemple "Javascript") sur la page web en affichant: L'avatar de l'auteur, le nom de l'auteur, le nom du repo, la description du repo, url du repository.
                    </p>
                </div>
                <div className="container-rea__card">
                    <a target='_blank' href="https://coherence-cardiaque-rust.vercel.app/" className="container-rea__card__link">
                        <img src={cohe} alt="" className="container-rea__card__img" />
                    </a>
                    <h2 className="container-rea__card__title">Cohérence Cardiaque</h2>
                    <p className='container-rea__card__state'>- En Production -</p>
                    <p className="container-rea__card__desc">
                        Projet réalisé en JavaScript. Création d'un outil de cohérence cardiaque pour aider à combattre le stress.
                        Le but de cette application est de voir un disque s'animer pendant 5 secondes en continue pendant une durée de 5 minutes et que ce soit également paramétrable.
                    </p>
                </div>
                <div className="container-rea__card">
                    <a target='_blank' href="https://timer-beta-blue.vercel.app/" className="container-rea__card__link">
                        <img src={chrono} alt="" className="container-rea__card__img" />
                    </a>
                    <h2 className="container-rea__card__title">Chronomètre Neumorphism</h2>
                    <p className='container-rea__card__state'>- En Production -</p>
                    <p className="container-rea__card__desc">
                        Projet d'entrainement pour la réalisation d'un chronomètre en javascript avec un design en neumorphism.
                    </p>
                </div>
                <div className="container-rea__card">
                    <a target='_blank' href="https://docs.djangoproject.com/en/4.2/" className="container-rea__card__link">
                        <img src={pydjan} alt="" className="container-rea__card__img" />
                    </a>
                    <h2 className="container-rea__card__title">Langage Python et framework Django</h2>
                    <p className='container-rea__card__state'>- En cours d'apprentissage -</p>
                    <p className="container-rea__card__desc">
                        Initiation au langage Python et à l'utilisation du framework Django pour la création d'applications web dynamiques et évolutives. Exploration des concepts fondamentaux de Django et mise en pratique progressive.
                    </p>
                </div>
                <div className="container-rea__card">
                    <a target='_blank' href="https://symfony.com/doc/current/index.html" className="container-rea__card__link">
                        <img src={symfo} alt="" className="container-rea__card__img" />
                    </a>
                    <h2 className="container-rea__card__title">Framework Symfony</h2>
                    <p className='container-rea__card__state'>- En cours d'apprentissage -</p>
                    <p className="container-rea__card__desc">
                        Découverte du Framework Symfony pour la création d'applications web robustes et modulaires. Exploration des fonctionnalités clés et enrichissement de compétences en back-end.
                    </p>
                </div>
            </div>
        </section >
    );
}

export default Projects;
