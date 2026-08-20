# Stride — Simple Shoe Store Chatbot Test Site

A lightweight, frontend-only shoe store designed specifically for testing a website chatbot.

The site requires **no dedicated backend** and can be deployed directly to **Vercel**.

## Features

* Simple shoe-store homepage
* Product listing
* Product details
* Search and category filtering
* Product data stored locally in JavaScript
* No database
* No API server
* No authentication
* Fully static deployment
* Suitable for connecting/testing a chatbot such as Voicium

---

## Recommended Stack

* React
* Vite
* JavaScript
* CSS
* Vercel

Everything runs on the frontend.

---

## Project Structure

```text
stride/
├── public/
│   └── products/
│
├── src/
│   ├── data/
│   │   └── products.js
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── ProductCard.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Shop.jsx
│   │   └── Product.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── index.html
└── README.md
```

---

# 1. Install

Create the project:

```bash
npm create vite@latest stride -- --template react
cd stride
npm install
```

Start locally:

```bash
npm run dev
```

The site will normally be available at:

```text
http://localhost:5173
```

---

# 2. Product Data

Keep the complete product catalogue inside:

```text
src/data/products.js
```

Example:

```js
const products = [
  {
    id: 1,
    slug: "stride-runner",
    name: "Stride Runner",
    category: "Running",
    price: 79.99,
    color: "Black",
    sizes: [39, 40, 41, 42, 43, 44],
    available: true,
    description:
      "Lightweight running shoes designed for everyday training.",
    image: "/products/stride-runner.jpg"
  },

  {
    id: 2,
    slug: "urban-walker",
    name: "Urban Walker",
    category: "Casual",
    price: 64.99,
    color: "White",
    sizes: [40, 41, 42, 43],
    available: true,
    description:
      "Comfortable everyday sneakers for walking and casual wear.",
    image: "/products/urban-walker.jpg"
  }
];

export default products;
```

For chatbot testing, **include every product and all important attributes** in this file.

Recommended fields:

```text
id
slug
name
category
price
color
sizes
available
description
image
```

You can also add:

```text
brand
material
gender
discount
originalPrice
rating
stock
tags
```

---

# 3. Why Local Product Data?

The purpose of this project is to avoid needing a backend.

The chatbot should be able to inspect the actual website and discover product information from the rendered pages.

Do **not** depend on a private database or development-only API.

The product catalogue should therefore be rendered into the actual shop page.

For example:

```text
/shop
```

should display all products rather than only loading one product dynamically after a user interaction.

---

# 4. Important for Chatbot Testing

The chatbot should be able to answer questions such as:

### Product discovery

```text
What shoes do you sell?
```

```text
Show me your running shoes.
```

```text
What casual shoes are available?
```

```text
Do you have black shoes?
```

```text
Which shoes cost less than $70?
```

### Product details

```text
How much does the Stride Runner cost?
```

```text
What sizes are available for the Stride Runner?
```

```text
What color is the Urban Walker?
```

```text
Tell me about the Stride Runner.
```

### Filtering

```text
Do you have running shoes under $80?
```

```text
I need black shoes in size 42.
```

```text
Which shoes are available in size 43?
```

```text
Show me white casual shoes.
```

### Comparison

```text
Compare the Stride Runner and Urban Walker.
```

```text
Which is cheaper?
```

```text
Which one is better for running?
```

### Availability

```text
Is the Stride Runner available?
```

```text
Do you have size 44?
```

```text
Which shoes are currently in stock?
```

### Conversational queries

```text
I'm looking for comfortable shoes for everyday use.
```

```text
I need running shoes under $80.
```

```text
I want something black for less than $70.
```

```text
I wear size 42. What can I buy?
```

---

# 5. Avoid This Problem

Do not make the shop page depend entirely on a backend endpoint such as:

```text
/api/products/
```

if the chatbot's crawler cannot access or understand that endpoint.

Instead, render the products directly into the page.

For example:

```jsx
{products.map((product) => (
  <ProductCard
    key={product.id}
    product={product}
  />
))}
```

This makes the product information part of the rendered website.

---

# 6. Product Pages

Each product should have its own URL.

Example:

```text
/shop/stride-runner
/shop/urban-walker
/shop/city-classic
```

Each page should visibly contain:

* Product name
* Price
* Category
* Color
* Available sizes
* Availability
* Description
* Product image

This gives the chatbot substantially more information to work with.

---

# 7. Vercel Deployment

Push the project to GitHub.

Then open Vercel and import the repository.

Use:

```text
Framework:
Vite

Build Command:
npm run build

Output Directory:
dist
```

Vercel should automatically detect the Vite project.

No backend server is required.

---

# 8. Test the Production Website

After deployment, verify:

```text
https://your-site.vercel.app/
```

Then check:

```text
https://your-site.vercel.app/shop
```

Open several individual products and make sure their information is visible in the page.

Do not test only the homepage.

The chatbot should be given the **production URL**, not:

```text
localhost
```

---

# 9. Chatbot Test Checklist

Test these progressively.

### Level 1 — Basic

```text
What products do you sell?
```

```text
What is your cheapest shoe?
```

```text
What is your most expensive shoe?
```

### Level 2 — Product attributes

```text
Which shoes are black?
```

```text
Which shoes are available in size 42?
```

```text
Which running shoes are available?
```

### Level 3 — Multiple constraints

```text
Find me black running shoes under $80 in size 42.
```

```text
I want white casual shoes under $70.
```

### Level 4 — Reasoning

```text
Which shoe would you recommend for running?
```

```text
Which is cheaper, the Stride Runner or Urban Walker?
```

```text
I need everyday shoes. What do you recommend?
```

### Level 5 — Unknown information

Ask something that the website does **not** contain:

```text
Do these shoes have a 2-year warranty?
```

```text
Are these shoes waterproof?
```

```text
Do you offer free international shipping?
```

The chatbot should **not invent an answer**.

A good response would acknowledge that the information is not available.

---

# 10. Important Chatbot Test

One of the most important tests is:

```text
List every shoe currently available on the website.
```

The chatbot should return the complete catalogue.

Then ask:

```text
How many products do you have?
```

The number should match the actual number of products rendered on `/shop`.

Then ask:

```text
What are all the available sizes for [product name]?
```

The answer should match the product page exactly.

---

# 11. Goal

The purpose of this project is **not** to build a production e-commerce system.

It is a controlled website for determining how well a chatbot can:

1. Crawl a website
2. Discover products
3. Understand product attributes
4. Answer filtering questions
5. Compare products
6. Handle unavailable information
7. Avoid hallucinating products or specifications

The entire website can remain frontend-only.

No Django server, Node/Express API, database, or paid backend hosting is necessary.
