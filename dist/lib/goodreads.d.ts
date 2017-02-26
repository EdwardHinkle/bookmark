import * as http from "http";
export declare class Goodreads {
    options: GoodreadsConfig;
    oauthAccessToken: string;
    oauthAccessTokenSecret: string;
    client?: null;
    constructor(config: GoodreadsConfig);
    configure(key: string, secret: string, callback: string): void;
    showUser(username: string): Promise<GoodreadsAPIResponse>;
    request(method: string, options: GoodreadsConfig): Promise<GoodreadsAPIResponse>;
    clone(objectToClone: any): any;
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
    id: [string];
    name: [string];
    user_name: [string];
    link: [string];
    image_url: [string];
    small_image_url: [string];
    about: [string];
    age: [string];
    gender: [string];
    location: [string];
    website: [string];
    joined: [string];
    last_active: [string];
    interests: [string];
    favorite_books: [string];
    favorite_authors: [GoodreadsAPIFavoriteAuthor];
    updates_rss_url: [string];
    reviews_rss_url: [string];
    friends_count: [GoodreadsAPIFriendsCount];
    groups_count: [string];
    reviews_count: [GoodreadsAPIReviewsCount];
    user_shelves: [GoodreadsAPIUserShelves];
    updates: [GoodreadsAPIUpdates];
    user_statuses: [GoodreadsAPIUserStatuses];
}
export interface GoodreadsAPIFavoriteAuthor {
    author: [Object];
}
export interface GoodreadsAPIFriendsCount {
    _: string;
    $: [Object];
}
export interface GoodreadsAPIReviewsCount {
    _: string;
    $: [Object];
}
export interface GoodreadsAPIUserShelves {
    $: [Object];
    user_shelf: [Object];
}
export interface GoodreadsAPIUpdates {
    $: [Object];
    update: [Object];
}
export interface GoodreadsAPIUserStatuses {
    user_status: [Object];
}
