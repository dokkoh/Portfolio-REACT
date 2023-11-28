import './style.scss';
import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

const RecentArticles = () => {
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);

    const fetchArticles = async () => {
        const apiKey = process.env.REACT_APP_API_KEY_NEWS;
        const apiUrl = 'https://gnews.io/api/v4/search?q=animals&lang=fr&country=fr&max=3&apikey=' + apiKey;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
console.log(data);
            if (data.articles) {

                setArticles(data.articles);
                setPage((prevPage) => prevPage + 1);
            }
        } catch (error) {
            console.error('Erreur lors de la récupération des articles:', error);
        }
    };

    useEffect(() => {
        fetchArticles();
    }, []);

    return (
        <section role='region'>
            <div className='recent-articles'>
                <h2 className='recent-articles__title'>Articles récents sur le développement web et la tech</h2>
                <ul className='recent-articles__list'>
                    {articles.map((article, index) => (
                        <li className='recent-articles__item' key={index}>
                            <h3>
                                <a className='recent-articles__link' href={article.url} target="_blank" rel="noopener noreferrer">
                                    {article.title}
                                </a>
                            </h3>
                            <p className='recent-articles__desc'>{article.description}</p>
                            <p className='recent-articles__date'>{article.publishedAt}</p>
                            <p className='recent-articles__author'>{article.source.name}</p>
                        </li>
                    ))}
                </ul>
                <button className='recent-articles__btn' onClick={fetchArticles}>Afficher 3 autres articles</button>
            </div>
        </section>

    );
};

export default RecentArticles;