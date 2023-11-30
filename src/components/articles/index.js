import './style.scss';
import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import bdm from '../images/bdm.png'

const RecentArticles = () => {
    const [articles, setArticles] = useState([]);
    const [requestCount, setRequestCount] = useState(0);
    const [error, setError] = useState(null);

    const fetchArticles = async () => {
        const apiKey = process.env.REACT_APP_API_KEY_NEWS;
        const apiUrl = 'https://gnews.io/api/v4/search?q="developpement-web"&lang=fr&country=fr&max=3&sortby=publishedAt&apikey=' + apiKey;

        try {
            const response = await fetch(apiUrl);
            if (response.ok) {
                const data = await response.json();
                setArticles(data.articles);
                setRequestCount((prevCount) => prevCount + 1);
            } else {
                setError('Visitez le');
            }
        } catch (error) {
            console.error('Erreur lors de la récupération des articles:', error);
            setError('Erreur lors de la récupération des articles');
        }
    };

    useEffect(() => {
        const resetRequestCount = () => {
            const now = new Date();
            const midnight = new Date(now);
            midnight.setHours(24, 0, 0, 0);

            const timeUntilMidnight = midnight - now;

            setTimeout(() => {
                setRequestCount(0);
            }, timeUntilMidnight);
        };

        resetRequestCount();

        if (requestCount < 100) {
            fetchArticles();
        }
    }, [requestCount]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return format(date, "dd/MM/yyyy HH:mm");
    };

    return (
        <section role='region'>
            <div className='recent-articles'>
                {error ? (
                    <React.Fragment>
                        <h2 className='recent-articles__title'>Articles récents sur le développement web et la tech</h2>
                        <p>{error} <a className='blogLink' href="https://www.blogdumoderateur.com/" target="_blank" rel="noopener noreferrer">Blog du Modérateur</a>.</p>
                        <a href="https://www.blogdumoderateur.com/" target="_blank" rel="noopener noreferrer"><img className='recent-articles__img' src={bdm} alt="" /></a>

                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <h2 className='recent-articles__title'>Articles récents sur le développement web et la tech</h2>
                        <ul className='recent-articles__list'>
                            {articles.map((article, index) => (
                                <li className='recent-articles__item' key={index}>
                                    <h3>
                                        <a className='recent-articles__link' href={article.url} target="_blank" rel="noopener noreferrer">
                                            {article.title}
                                        </a>
                                    </h3>
                                    <img className='recent-articles__img' src={article.image} alt="image en relation avec l'article" />
                                    <p className='recent-articles__desc'>{article.description}</p>
                                    <p className='recent-articles__date'>{formatDate(article.publishedAt)}</p>
                                    <p className='recent-articles__author'>{article.source.name}</p>
                                </li>
                            ))}
                        </ul>
                    </React.Fragment>
                )}
            </div>
        </section>
    );
};

export default RecentArticles;