# 🧮 Calculadora JS

Calculadora web para operaciones básicas con interfaz accesible, soporte de teclado y diseño responsive.

<img alt="Calculadora JS" src="https://github.com/micazoyolli/calculadora/blob/main/public/assets/screenshot.png" width="300" />

## 🌐 Demo

[Calculadora JS Demo](https://calculadora.nadia.dev/)

## 🛠️ Tecnologías

- HTML5
- JavaScript
- SCSS
- Vite
- Micazoyolli Foundation para SEO/build y reduced motion

## 🧱 Requisitos

- Node 24.18.1 (`engines.node`: `>=24.18.1 <25`)
- Yarn 1.22.22

## 📦 Instalación

```bash
yarn install
```

## 🚀 Scripts

```bash
yarn dev
yarn lint
yarn build
yarn preview
yarn deploy
```

Abre `http://localhost:5173/` para ver la aplicación en local.

## 🗂️ Estructura del proyecto

```txt
public/
scripts/
src/
├── styles/
├── Calculator.js
└── main.js
```

## 🚢 Despliegue en GitHub Pages

Este proyecto se publica en GitHub Pages desde la rama `gh-pages`. El comando `yarn deploy` compila la aplicación, limpia archivos `.DS_Store` del build y publica `dist/` usando el CLI de Micazoyolli Foundation sin crear commits de despliegue en `main`.

La aplicación utiliza la raíz `/` como `base` porque se publica en un dominio propio.

## 🧠 Funcionalidad

- Operaciones básicas: suma, resta, multiplicación y división.
- Soporte para decimales, borrar y limpiar.
- Interacción con teclado mediante `Enter`, `Backspace` y `Escape`.

## 🧩 Construido con Micazoyolli Foundation

Este proyecto utiliza [Micazoyolli Foundation](https://github.com/micazoyolli/foundation) como infraestructura compartida. Las mejoras de tooling, estructura y despliegue deben realizarse en Foundation para beneficiar a todos los proyectos que la consumen.

## 👩‍💻 Autora

Una creación de [`<micazoyolli />✨`](https://nadia.dev)
