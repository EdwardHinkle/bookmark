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

## Getting Started Using Bookmark

Download this package into a folder inside of your project, and include it from your TypeScript file. All you need to do is point to the bookmark folder within your project and the Goodreads wrapper will be exported into your script from the latest build.

`import { Goodreads } from './bookmark';`

## Getting Started Developing Bookmark

If you want to contribute, this is what you need to do. Download bookmark.

Enter the bookmark directory
> cd bookmark

Install the dependencies
> npm install

Compile TypeScript files
> tsc

If that worked okay, then you should be ready to add new features to Bookmark!