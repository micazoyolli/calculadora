# 🧮 Calculadora JS

Calculadora web moderna que realiza sumas, restas, multiplicaciones y divisiones. Cuenta con diseño responsivo, interfaz accesible y soporte para teclado. Desarrollada con buenas prácticas y tecnologías modernas.

<img alt="Calculadora JS" src="https://github.com/micazoyolli/calculadora/blob/master/public/assets/screenshot.png" width="300" />

## 🌐 Demo

[Calculadora JS Demo](https://micazoyolli.github.io/calculadora/)

## 🚀 Tecnologías usadas

- HTML5 + SCSS (estructura modular)
- JavaScript moderno (ES6+)
- Vite 8
- Node 24
- @micazoyolli/foundation para SEO/build y reduced motion

## 📦 Estructura del proyecto

```
calculadora/
├── public/
│   ├── assets/
│   ├── icons/
│   ├── favicon.ico
│   ├── manifest.json
│   ├── meta.jpg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── Calculator.js
│   ├── main.js
│   ├── main.scss
│   └── styles/
│       ├── abstracts/
│       │   └── _variables.scss
│       ├── base/
│       │   └── _reset.scss
│       └── components/
│           ├── _buttons.scss
│           ├── _calculator.scss
│           └── _footer.scss
├── .editorconfig
├── .gitignore
├── .nvmrc
├── index.html
├── LICENSE
├── package.json
└── vite.config.js
```

## ▶️ Uso

```bash
yarn install
yarn dev
yarn lint
yarn build
```

Abre `http://localhost:5173/calculadora/` para ver la app en el navegador.

## 🧠 Funcionalidad

- Interfaz moderna con botones y teclado.
- Soporte para operaciones básicas (`+ - * /`).
- Soporte para decimales, borrar y limpiar.
- Compatible con teclado (`Enter`, `Backspace`, `Escape`).

---

## 👩‍💻 Autora

Una creación de [`<micazoyolli />✨`](https://nadia.dev)
