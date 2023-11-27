import './style.scss';

function Skills() {
    return (
        <section role='region' id='competences' className='section'>
            <h2 className='section__title'>Compétences</h2>
            <article className='article'>
                <h3 className='article__title'>Front-end</h3>
                <div className='article__icons'>
                    <i class="devicon-html5-plain colored"></i>
                    <i class="devicon-css3-plain colored"></i>
                    <i class="devicon-sass-original colored"></i>
                    <i class="devicon-javascript-plain colored"></i>
                    <i class="devicon-react-original colored"></i>
                    <i class="devicon-npm-original-wordmark colored"></i>
                </div>
                <p className='article__info'>
                    HTML5, CSS3 ,SASS, bundler, JavaScript, React, SPA, npm, responsive
                </p>
            </article>
            <article className='article'>
                <h3 className='article__title'>Back-end</h3>
                <div className='article__icons'>
                    <i class="devicon-nodejs-plain colored"></i>
                    <i class="devicon-express-original"></i>
                    <i class="devicon-postgresql-plain colored"></i>
                    <i class="devicon-php-plain colored"></i>
                    <i class="devicon-python-plain colored"></i>
                    <i class="devicon-mysql-plain colored"></i>
                    <i class="devicon-docker-plain colored"></i>
                </div>
                <p className='article__info'>
                    Nodes.js, Express.js, PostgreSQL, PHP, Python, MySQL, CMS, Strapi, API REST, Docker
                </p>
            </article>
            <article className='article'>
                <h3 className='article__title'>Accessibilité</h3>
                <p className='article__info'>
                    Normes WCAG et RGAA
                </p>
            </article>
            <article className='article'>
                <h3 className='article__title'>Outils</h3>
                <div className='article__icons'>
                    <i class="devicon-windows8-original colored"></i>
                    <i class="devicon-linux-plain"></i>
                    <i class="devicon-git-plain colored"></i>
                    <i class="devicon-vscode-plain colored"></i>
                </div>
                <p className='article__info'>
                    Windows, Linux, Git, VScode
                </p>
            </article>
        </section>
    );
}

export default Skills;
