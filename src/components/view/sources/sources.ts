import './sources.css';
import type { Source } from '../../../types';
import getElement from '../../../utils/getElement';

class Sources {
    draw(data: Source[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');

        if (sourceItemTemp) {
            data.forEach((item) => {
                const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;

                getElement(sourceClone, '.source__item-name').textContent = item.name;
                getElement(sourceClone, '.source__item').dataset.sourceId = item.id;

                fragment.append(sourceClone);
            });

            const sourcesContainer: HTMLElement | null = document.querySelector('.sources');
            if (sourcesContainer) {
                sourcesContainer.append(fragment);
            }
        }
    }
}

export default Sources;
