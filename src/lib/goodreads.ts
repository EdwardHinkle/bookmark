import * as http from "http"
import * as xml2js from "xml2js"

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
            oauth_request_url: 'http://goodreads.com/oauth/request_token',
            oauth_access_url: 'http://goodreads.com/oauth/access_token',
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
    showUser(username: string): Promise<GoodreadsAPIResponse> {
      var queryData = this.clone(this.options);
      queryData.path = "https://www.goodreads.com/user/show.xml?key=" + queryData.key + "&username=" + username;
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

export interface GoodreadsAPIResponse {
    Request: [GoodreadsAPIRequest],
    user?: [GoodreadsAPIUser]
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
    favorite_authors: [ GoodreadsAPIFavoriteAuthor ];
    updates_rss_url: [string];
    reviews_rss_url: [string];
    friends_count: [ GoodreadsAPIFriendsCount ];
    groups_count: [string];
    reviews_count: [ GoodreadsAPIReviewsCount ];
    user_shelves: [ GoodreadsAPIUserShelves ];
    updates: [ GoodreadsAPIUpdates ];
    user_statuses: [ GoodreadsAPIUserStatuses ];
}

export interface GoodreadsAPIFavoriteAuthor {
    author: [Object]
}

export interface GoodreadsAPIFriendsCount {
    _: string; // Number of Friends
    $: [Object];
}

export interface GoodreadsAPIReviewsCount {
    _: string; // Number of Reviews
    $: [Object];
}

export interface GoodreadsAPIUserShelves {
    $: [Object];
    user_shelf: [Object];
}

export interface GoodreadsAPIUpdates {
    $: [Object];
    update: [Object]
}

export interface GoodreadsAPIUserStatuses {
    user_status: [Object]
}