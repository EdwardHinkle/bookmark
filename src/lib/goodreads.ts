import * as http from "http";
import * as xml2js from "xml2js";
import * as querystring from "querystring";
import * as Promise from 'bluebird';

import { GoodreadsAPIResponse } from './goodreadsResponseInterfaces';

export class Goodreads {
    options: GoodreadsConfig;
    oauthAccessToken: string;
    oauthAccessTokenSecret: string;
    client?: null;

    constructor(config: GoodreadsConfig) {
        this.options = {
            host: 'www.goodreads.com',
            port: 80,
            key: config.key,
            secret: config.secret,
            callback: config.callback || 'http://localhost:3000/callback',
            method: "GET",
            path: '',
            oauth_request_url: 'https://goodreads.com/oauth/request_token',
            oauth_access_url: 'https://goodreads.com/oauth/access_token',
            oauth_version: '1.0',
            oauth_encryption: 'HMAC-SHA1'
        }
    }

    configure(key: string, secret: string, callback: string) {
        this.options.key = key || this.options.key;
        this.options.secret = secret || this.options.secret;
        this.options.callback = callback || this.options.callback;
        return;
    }

    // Goodreads API Calls

    // USER API CALLS
    showUser(username: string): Promise<GoodreadsAPIResponse> {
      var queryData = this.clone(this.options);
      queryData.path = "https://www.goodreads.com/user/show.xml?key=" + queryData.key + "&username=" + username;
      return this.request("GET", queryData);
    }

    // BOOKSHELF API CALLS
    getShelves(userId: number): Promise<GoodreadsAPIResponse> {
      var queryData = this.clone(this.options);
      queryData.path = 'https://www.goodreads.com/shelf/list.xml?user_id=' + userId + "&key=" + queryData.key;
      return this.request("GET", queryData);
    }

    getSingleShelf(shelfOptions: GoodreadsAPIShelfOptions): Promise<GoodreadsAPIResponse> {
      var queryData = this.clone(this.options);
      shelfOptions.key = queryData.key;
      queryData.path = 'https://www.goodreads.com/review/list?' + querystring.stringify(shelfOptions);
      return this.request("GET", queryData);
    }

    // BOOK Statuses
    getUserBookReview(reviewOptions: GoodreadsAPIBookReviewOptions): Promise<GoodreadsAPIResponse> {
      var queryData = this.clone(this.options);
      reviewOptions.key = queryData.key;
      queryData.path = 'https://www.goodreads.com/review/show_by_user_and_book.xml?' + querystring.stringify(reviewOptions);
      return this.request("GET", queryData);
    }


    // HTTP Request
    request(method: string, options: GoodreadsConfig): Promise<GoodreadsAPIResponse> {
        return new Promise<GoodreadsAPIResponse>((resolve, reject) => { 

            var parser: xml2js.Parser = new xml2js.Parser();
            var tmp: any[] = [];

            if (method == "GET") {

                return http.request(options, (res) => {

                    res.setEncoding('utf8');

                    res.on('data', (chunk) => {
                        return tmp.push(chunk);
                    });

                    res.on('end', (e: any) => {
                        var body;
                        body = tmp.join('');
                        parser.parseString(body);
                        return;
                    });

                    return parser.on('end', (result: any) => {
                        return resolve(result.GoodreadsResponse);
                    });

                }).end();

            }
        });

    }

    clone(objectToClone: any): any {
        return JSON.parse(JSON.stringify(objectToClone));
    }


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
    sort?: string
    search?: string;
    order?: string; // a or d
    page?: number; // 1-N
    per_page?: number; // 1-200
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
    sort?: string
    search?: string;
    order?: string; // a or d
    page?: number; // 1-N
    per_page?: number; // 1-200
}

