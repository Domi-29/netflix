# 🎬 Netflix Clone – Frontend Project

Jednoduchý frontendový projekt inšpirovaný rozhraním Netflixu.  
Projekt slúži ako **portfólio ukážka** práce s čistým HTML, CSS a JavaScriptom bez použitia frameworkov.

netflixclone-lac-three.vercel.app
---

## 📄 Pages

- **index.html** – landing page (hero, ukážka filmov, footer)
- **movies.html** – vyhľadávanie filmov pomocou API
- **register.html** – registračný formulár s validáciou hesiel

---

## ✨ Features

- responzívny dizajn (desktop / tablet / mobile)
- jednotný layout a dizajn naprieč stránkami
- scroll-to-top tlačidlo (iba na landing page)
- registračný formulár s kontrolou zhody hesiel
- HTML5 validácia vstupov
- dynamické načítanie filmov z API
- jemné CSS animácie a hover efekty

---

## 🎬 Movies API

Projekt využíva verejnú API službu:

- **TVMaze API**
- endpoint:
 https://api.tvmaze.com/search/shows?q={query}


Filmy sa načítavajú dynamicky podľa zvoleného filtra.

---

## 🛠 Tech Stack

- **HTML5** – sémantická štruktúra
- **CSS3** – Flexbox, media queries, CSS variables
- **JavaScript (ES6)** – DOM manipulácia, Fetch API
- **Font Awesome** – ikonky
- **Google Fonts (Inter)** – bezpätkové písmo

---

## 📁 Project Structure

```txt
/project
├─ index.html
├─ movies.html
├─ register.html
├─ style.css
├─ script.js
└─ images/
