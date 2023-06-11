# 📖 EnsiRef - Les références de cours pour les Ensicaennais

Le code de ce repository est repris de QuickRef.me


## 🗂️ Directory structure
```
.
├── source
│   ├── _posts   # Cheat sheet source files
│   │   ├── algorithmique-avance
│   │   ├── ...
│   └── widget   # Widget files
│       └── chmod.html
├── public       # Distribution files
├── _config.yml
├── gulpfile.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── themes
    └── coo      # Theme files
```




## 🤝 Contributing

1. Clone Github repo `git clone https://github.com/Fechin/reference.git`
2. Install `npm` package manager (Read [installation guide](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm))
3. Run `npm install` in the root folder to install dependencies.
4. Run `npm run dev` to start a dev server. This serves the project and live reloads when any files are changed, then visit http://127.0.0.1:4000 preview.
5. Submit a pull request and wait for it to be reviewed and merged.



To create or edit a cheat sheet, you'll need to create or edit a markdown file in `source/_posts/{filename}.md`. The file should include a front matter section with the following format:


```markdown
---
title: QuickRef
date: 2020-11-25 18:28:43
icon: icon-style
background: bg-emerald-600
tags:
categories:
- Other
  intro: This is a reference of styles that you can use on quickref cheat sheets!
---
```
Only the `title` and `intro` fields are required, and the other options can be left blank. 


<a href="https://github.com/Fechin/reference/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Fechin/reference" />
</a>


## 🐦 Follow us on Twitter

[![Follow us on Twitter](https://img.shields.io/twitter/follow/FechinLi?color=%234a99e9&style=for-the-badge)](https://twitter.com/FechinLi)

Stay up-to-date with our project by following us on Twitter! Get all the latest news and updates right in your feed. It's the perfect way to stay in the loop.

<a href="https://www.buymeacoffee.com/randy8080"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=randy8080&button_colour=40DCA5&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00" /></a>


## 📃 License

The project is licensed under the [MIT](https://github.com/Fechin/reference/blob/main/LICENSE) License and is maintained by [Fechin](https://github.com/Fechin).

