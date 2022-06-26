/**
 *
 * Response Object of the `NewsAPI`
 */
export class NewsAPIResponse {
    status?: string; // If the request was successful or not. Options: ok, error. 
    totalResults?: number; // The total number of results available for your request. 
    articles?: NewsArticle[]; // The results of the request. 
    code?: string; // Error code.
    message?: string; // Error message. 
}
/**
 *
 * Response Object for `NewsArticle`
 */
export class NewsArticle {
    title?: string; // The headline or title of the article. 
    description?: string; // A description or snippet from the article.
    url?: string; // The direct URL to the article.
    urlToImage?: string;  // The URL to a relevant image for the article.
    publishedAt?: string;  // The date and time that the article was published, in UTC (+000) 
    content?: string; // The unformatted content of the article, where available. This is truncated to 200 chars.
}