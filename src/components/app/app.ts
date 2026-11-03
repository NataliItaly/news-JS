import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import getYear from '../../utils/getYear';

class App {
    private readonly controller: AppController;
    private readonly view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        const sourcesContainer: HTMLElement | null = document.querySelector('.sources');
        if (sourcesContainer) {
            sourcesContainer.addEventListener('click', (e: MouseEvent) =>
                this.controller.getNews(e, (data) => this.view.drawNews(data))
            );
            this.controller.getSources((data) => this.view.drawSources(data));
        }
    }
}

getYear();

export default App;
