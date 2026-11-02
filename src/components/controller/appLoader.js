import Loader from './loader.ts';

class AppLoader extends Loader {
    constructor() {
        super(process.env.API_URL, {
            apiKey: process.env.API_KEY,
        });
    }
}

export default AppLoader;
