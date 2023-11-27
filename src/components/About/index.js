import './style.scss';
import kitsunesite from '../images/return-kitsune-dokkoh1-portfolio.png';
import jcProfil from '../images/jcProfil.png';
import MonPortfolio from '../Portfolio';



function About() {

  const lienCV = process.env.REACT_APP_CV_LINK;

  return (
    <>
      <section role='region' id='apropos' className='sectionwhite reveal'>
        <h2 className='sectionwhite__title'>
          Qui suis-je ?
        </h2>
        <div className='sectionwhite__containermain'>
          <div className='sectionwhite__containertext'>
            <p className='sectionwhite__info'>
              Jérémy C. alias Dokkoh, développeur front et back-end localisé en France.
            </p>
            <p className='sectionwhite__info'>
            Mon parcours atypique m'a apporté une perspective unique dans la création de projets web interactifs et esthétiques. Je me distingue par ma capacité à allier créativité et rigueur technique. Passionné par la programmation et les nouvelles technologies, je m'efforce constamment de rester à la pointe des dernières tendances du secteur.
            </p>
            <p className='sectionwhite__info'>
            Mon expérience m'a enseigné l'importance de l'organisation et de l'attention aux détails. En tant que résolveur de problèmes enthousiaste, je trouve une satisfaction particulière dans la création d'expériences numériques fluides et accessibles à tous.
            </p>
            <p className='sectionwhite__info'>
            Ma curiosité m'amène à explorer tous les aspects du développement web, mais c'est dans les projets ambitieux et collaboratifs que je trouve le plus d'inspiration. Travailler avec des personnes positives et motivées est une source d'énergie pour moi et j'apprécie chaque opportunité de contribuer à des projets innovants.
            </p>
            <p className='sectionwhite__info'>
            Je suis convaincu que le mariage entre compétences techniques et passion peut véritablement transformer une simple idée en une expérience numérique exceptionnelle.
            </p>
          </div>
          <div className='sectionwhite__container'>
            <img className='sectionwhite__img' src={kitsunesite} alt="" />
          </div>
        </div>
        <MonPortfolio lienCV={lienCV} />
      </section>
      <section role='region' id='convictions' className='sectionwhite reveal'>
        <h2 className='sectionwhite__title'>
          Mes Convictions
        </h2>
        <div className='sectionwhite__containermain'>
          <div className='sectionwhite__container'>
            <img className='sectionwhite__img-profil' src={jcProfil} alt="" />
          </div>
          <div className='sectionwhite__containertext'>
            <p className='sectionwhite__info'>
              En tant que développeur passionné, mes convictions guident mon approche du métier.
            </p>
            <p className='sectionwhite__info'>
            Je suis profondément convaincu que la technologie a le pouvoir de créer des expériences significatives et accessibles. Pour moi, la diversité et l'inclusion ne sont pas seulement des valeurs, mais des piliers fondamentaux qui enrichissent notre approche du développement.
            </p>
            <p className='sectionwhite__info'>
            Cela signifie que la présence de personnes aux antécédents variés favorise la créativité et permet de trouver des approches originales pour résoudre des problèmes. En outre, cette diversité contribue à élaborer des solutions mieux adaptées à un public varié, car elle assure une compréhension approfondie des différents points de vue au sein de l'équipe.
            </p>
            <p className='sectionwhite__info'>
            Mon engagement envers l'écriture d'un code propre et efficace va de pair avec ma sensibilité aux normes d'accessibilité. Je m'efforce de garantir que mes créations soient utilisables par tous, indépendamment de leurs capacités. Cette attention à l'accessibilité ne se limite pas à une simple conformité, mais se traduit par une réelle volonté de rendre l'expérience utilisateur fluide et inclusive.
            </p>
            <p className='sectionwhite__info'>
            En contribuant activement à des projets open source, je participe à l'échange de connaissances au sein de la communauté de développement. Cette collaboration me permet de rester constamment à l'affût des dernières technologies et des meilleures pratiques, essentielles dans une industrie en constante évolution.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
