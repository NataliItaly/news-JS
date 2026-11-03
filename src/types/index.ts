export interface Article {
    urlToImage: string | null;
    author: string | null;
    source: {
        name: string;
    };
    publishedAt: string;
    title: string;
    description: string | null;
    url: string;
}

export interface Source {
    id: string;
    name: string;
}

export interface NewsResponse {
    articles: Article[];
}

export interface SourcesResponse {
    sources: Source[];
}
