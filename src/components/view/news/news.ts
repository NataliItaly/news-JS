import './news.css';
import type { Article } from '../../../types';

function getElement<T extends HTMLElement>(parent: ParentNode, selector: string): T {
    const element = parent.querySelector<T>(selector);

    if (!element) {
        throw new Error(`Element not found: ${selector}`);
    }

    return element;
}

class News {
    draw(data: Article[]) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp: HTMLTemplateElement | null = document.querySelector('#newsItemTemp');

        if (newsItemTemp) {
            news.forEach((item, idx) => {
                const newsClone = newsItemTemp.content.cloneNode(true) as DocumentFragment;

                if (idx % 2) {
                    getElement(newsClone, 'news__item').classList.add('alt');
                }

                getElement(newsClone, '.news__meta-photo').style.backgroundImage = `url(${
                    item.urlToImage || 'img/news_placeholder.jpg'
                })`;
                getElement(newsClone, '.news__meta-author').textContent = item.author || item.source.name;
                getElement(newsClone, '.news__meta-date').textContent = item.publishedAt
                    .slice(0, 10)
                    .split('-')
                    .reverse()
                    .join('-');

                getElement(newsClone, '.news__description-title').textContent = item.title;
                getElement(newsClone, '.news__description-source').textContent = item.source.name;
                getElement(newsClone, '.news__description-content').textContent = item.description;
                getElement(newsClone, '.news__read-more a').setAttribute('href', item.url);

                fragment.append(newsClone);
            });

            const newsContainer = document.querySelector('.news');
            if (newsContainer) {
                newsContainer.innerHTML = '';
                newsContainer.appendChild(fragment);
            }
        }
    }
}

export default News;
