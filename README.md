# Hyperactiv + react = ❤️⚡

## Client & Server demo with SSR

### [📸 Demo](https://hyperactiv-hooks-demo.herokuapp.com/posts)

Hosted demo, with SSR and caching using [hyperactiv/react](https://github.com/elbywan/hyperactiv/tree/master/src/react).

### What this demo is about

This demo is basically a website mining the [json placeholder api](https://jsonplaceholder.typicode.com).

While browsing the website, pay attention to the fact that:

- Requests are cached by default and only replayed whenever needed

- Loading and refetching data is possible super easily

- It is server side rendered

- Mutating the store using the editable input fields or the console make react re-render components

### Setup

#### 1 - Clone

`git clone https://github.com/elbywan/hyperactiv-hooks-demo`

#### 2 - Install

`pnpm i` or `npm i` or `yarn`

#### 3 - Profit

- `npm run dev`

*Dev mode, served by node.js on `http://localhost:5001`, with SSR and hot reload.*

- `npm run build`

*Lint & Build the sources*.

- `npm run prod`

*Prod mode, builds then starts the node.js backend that serves optimized HTML & JS using SSR on `http://localhost:5001`*

#### 4 - Play with the editable input fields, or the console

```js
// The store is bound to window.__STORE__
// You can toy with it to see how it reflects in the components re-rendering.

// Examples:
__STORE__.posts[2] = {"userId":1,"id":2,"title":"Lorem ipsum","body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
__STORE__.posts[1].title = "Hello"
delete __STORE__.__requests__['get@https://jsonplaceholder.typicode.com/posts?_page=1&_limit=20']
```
