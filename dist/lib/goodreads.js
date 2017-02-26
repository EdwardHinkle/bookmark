"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var xml2js = require("xml2js");
var Goodreads = (function () {
    function Goodreads(config) {
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
        };
    }
    Goodreads.prototype.configure = function (key, secret, callback) {
        this.options.key = key || this.options.key;
        this.options.secret = secret || this.options.secret;
        this.options.callback = callback || this.options.callback;
        return;
    };
    // Goodreads API Calls
    Goodreads.prototype.showUser = function (username) {
        var queryData = this.clone(this.options);
        queryData.path = "https://www.goodreads.com/user/show.xml?key=" + queryData.key + "&username=" + username;
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
