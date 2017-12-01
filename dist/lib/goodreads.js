"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var xml2js = require("xml2js");
var querystring = require("querystring");
var Promise = require("bluebird");
var Goodreads = /** @class */ (function () {
    function Goodreads(config) {
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
        };
    }
    Goodreads.prototype.configure = function (key, secret, callback) {
        this.options.key = key || this.options.key;
        this.options.secret = secret || this.options.secret;
        this.options.callback = callback || this.options.callback;
        return;
    };
    // Goodreads API Calls
    // USER API CALLS
    Goodreads.prototype.showUser = function (username) {
        var queryData = this.clone(this.options);
        queryData.path = "https://www.goodreads.com/user/show.xml?key=" + queryData.key + "&username=" + username;
        return this.request("GET", queryData);
    };
    // BOOKSHELF API CALLS
    Goodreads.prototype.getShelves = function (userId) {
        var queryData = this.clone(this.options);
        queryData.path = 'https://www.goodreads.com/shelf/list.xml?user_id=' + userId + "&key=" + queryData.key;
        return this.request("GET", queryData);
    };
    Goodreads.prototype.getSingleShelf = function (shelfOptions) {
        var queryData = this.clone(this.options);
        shelfOptions.key = queryData.key;
        queryData.path = 'https://www.goodreads.com/review/list?' + querystring.stringify(shelfOptions);
        return this.request("GET", queryData);
    };
    // BOOK Statuses
    Goodreads.prototype.getUserBookReview = function (reviewOptions) {
        var queryData = this.clone(this.options);
        reviewOptions.key = queryData.key;
        queryData.path = 'https://www.goodreads.com/review/show_by_user_and_book.xml?' + querystring.stringify(reviewOptions);
        return this.request("GET", queryData);
    };
    // HTTP Request
    Goodreads.prototype.request = function (method, options) {
        return new Promise(function (resolve, reject) {
            var parser = new xml2js.Parser();
            var tmp = [];
            if (method == "GET") {
                return http.request(options, function (res) {
                    res.setEncoding('utf8');
                    res.on('data', function (chunk) {
                        return tmp.push(chunk);
                    });
                    res.on('end', function (e) {
                        var body;
                        body = tmp.join('');
                        parser.parseString(body);
                        return;
                    });
                    return parser.on('end', function (result) {
                        return resolve(result.GoodreadsResponse);
                    });
                }).end();
            }
        });
    };
    Goodreads.prototype.clone = function (objectToClone) {
        return JSON.parse(JSON.stringify(objectToClone));
    };
    return Goodreads;
}());
exports.Goodreads = Goodreads;
