/// <reference types="bluebird" />
import * as http from "http";
import * as Promise from 'bluebird';
import { GoodreadsAPIResponse } from './goodreadsResponseInterfaces';
export declare class Goodreads {
    options: GoodreadsConfig;
    oauthAccessToken: string;
    oauthAccessTokenSecret: string;
    client?: null;
    constructor(config: GoodreadsConfig);
    configure(key: string, secret: string, callback: string): void;
    showUser(username: string): Promise<GoodreadsAPIResponse>;
    getShelves(userId: number): Promise<GoodreadsAPIResponse>;
    getSingleShelf(shelfOptions: GoodreadsAPIShelfOptions): Promise<GoodreadsAPIResponse>;
    getUserBookReview(reviewOptions: GoodreadsAPIBookReviewOptions): Promise<GoodreadsAPIResponse>;
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
export interface GoodreadsAPIShelfOptions {
    key?: string;
    v: number;
    id: number;
    shelf?: string;
    sort?: string;
    search?: string;
    order?: string;
    page?: number;
    per_page?: number;
}
export interface GoodreadsAPIBookReviewOptions {
    key?: string;
    book_id: number;
    user_id: number;
}
export interface GoodreadsAPIShelfOptions {
    key?: string;
    v: number;
    id: number;
    shelf?: string;
    sort?: string;
    search?: string;
    order?: string;
    page?: number;
    per_page?: number;
}
