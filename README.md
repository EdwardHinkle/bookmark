# bookmark
A TypeScript Goodreads API wrapper for Node.js.

Currently in early alpha development. Initial concept from https://github.com/bdickason/node-goodreads.
The early focus of Bookmark is non-social, non-OAuth APIs. Once that is done, I'll move into the OAuth supported APIs.
Currently the wrapper just hits the API endpoints, converts the XML response to JSON and return it. The response is not pretty, although interfaces have been generated to make using it in TypeScript easier. Ultimately, when time is available, the goal is to make the responses prettier. The goal is to take the API responses and convert them to actual TypeScript Classes for the Objects (Review, Shelf, Book, etc).

### Current APIs that are working
- user.show
- shelf.list
- review.list
- review.show\_by\_user\_and\_book

## Getting Started

> npm install
> import { Goodreads } from './lib/goodreads';