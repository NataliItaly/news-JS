import AppLoader from './appLoader';
import type { ResponseCallback } from './loader';
import type { NewsResponse, SourcesResponse } from '../../types';
import { Endpoint } from '../../enums/endpoints';

class AppController extends AppLoader {
    public getSources(callback: ResponseCallback<SourcesResponse>): void {
        super.getResp(
            {
                endpoint: Endpoint.Sources,
            },
            callback
        );
    }

    public getNews(e: MouseEvent, callback: ResponseCallback<NewsResponse>): void {
        let target = e.target;
        const newsContainer = e.currentTarget;

        if (!(newsContainer instanceof HTMLElement)) {
            return;
        }

        while (target instanceof Element && target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (sourceId && newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: Endpoint.Everything,
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode;
        }
    }
}

export default AppController;
