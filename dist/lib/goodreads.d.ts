import * as http from "http";
export declare class Goodreads {
    options: GoodreadsConfig;
    oauthAccessToken: string;
    oauthAccessTokenSecret: string;
    client?: null;
    constructor(config: GoodreadsConfig);
    configure(key: string, secret: string, callback: string): void;
    showUser(username: string): Promise<GoodreadsAPIResponse>;
    request(method: string): Promise<GoodreadsAPIResponse>;
}
export interface GoodreadsConfig extends http.RequestOptions {
    host?: string;
    port?: number;
    key?: string;
    secret?: string;
    callback?: string;
    method?: string;
    path?: string;
    oauth_request_url?: string;
    oauth_access_url?: string;
    oauth_version?: string;
    oauth_encryption?: string;
}
export interface GoodreadsAPIResponse {
    Request: [GoodreadsAPIRequest];
    user?: [GoodreadsAPIUser];
}
export interface GoodreadsAPIRequest {
    authentication: [string];
    key: [string];
    method: [string];
}
export interface GoodreadsAPIUser {
    id: Object;
    name: Object;
    user_name: Object;
    link: Object;
    image_url: [Object];
    small_image_url: [Object];
    about: [Object];
    age: [Object];
    gender: [Object];
    location: [Object];
    website: [Object];
    joined: [Object];
    last_active: [Object];
    interests: [Object];
    favorite_books: [Object];
    favorite_authors: [Object];
    updates_rss_url: [Object];
    reviews_rss_url: [Object];
    friends_count: [Object];
    groups_count: [Object];
    reviews_count: [Object];
    user_shelves: [Object];
    updates: [Object];
    user_statuses: [Object];
}
