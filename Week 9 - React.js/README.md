[https://petal-estimate-4e9.notion.site/React-Part-1-1177dfd1073580069172fc54e33929c0](https://www.notion.so/1177dfd1073580069172fc54e33929c0?pvs=21)
    
Lecture slides - https://www.canva.com/design/DAGStTo7_1Y/H-uoNlkdJ2X4P3LbOME45Q/edit

# React

- **React** is a **JavaScript library** used to build **user interfaces (UI),** especially for web applications.
- It was created by **Facebook** (now **Meta Platforms**) and is widely used for building modern websites and web apps.
- React is just easier way to write normal HTML/CSS/JS, It’s a new syntax, that user the hood gets converted to HTML/CSS/JS only.

---

# But why React?

- People realised it’s harder to do DOM manipulation the conventional way
- There were libraries that came into the picture that made it slightly easy, but still for a very big app it’s very hard (jQuery)
- Eventually, Vue.js/ React created a new syntax to do frontend
- Under the hood, the react compiler convert your code to HTML/CSS/JS

---

# Starting a react project locally

There are various ways to bootstrap a react project locally. Vite is the most widely used one today. 

## Vite

Ref - https://vite.dev/guide/

Vite (French word for "quick", pronounced `/vit/`, like "veet") is a build tool that aims to provide a faster and leaner development experience for modern web projects. It consists of two major parts:

- A dev server that provides [**rich feature enhancements**](https://vite.dev/guide/features) over [**native ES modules**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules), for example extremely fast [**Hot Module Replacement (HMR)**](https://vite.dev/guide/features#hot-module-replacement).
- A build command that bundles your code with [**Rollup**](https://rollupjs.org/), pre-configured to output highly optimized static assets for production.

---

### Initializing a react project

```bash
npm create vite@latest
```

---

# Components

In React, components are the building blocks of the user interface. They allow you to split the UI into independent, re-usable pieces that can be thought of as custom, self-contained HTML elements.

---

![component](./images/image.png)