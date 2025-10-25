# Sidebar Toggle Project

This project demonstrates how to use **JavaScript DOM manipulation** to toggle the visibility of a sidebar using a simple **button click**. It also shows the difference between manual state tracking and using the built-in `classList.toggle()` method for more efficient and cleaner code.

---

## 🧩 Project Overview

We built a simple layout consisting of:

* A **navigation bar** with a toggle button
* A **sidebar** (`<aside>`) that can be shown or hidden
* A **main content area**
* A **footer**

The layout uses **Flexbox**, so when the sidebar is hidden, the main section automatically expands to fill the available space.

---

## 🧠 What We Learned

### 1. DOM Manipulation Basics

We can access and modify HTML elements dynamically using JavaScript. The DOM (Document Object Model) represents the HTML page as a tree of objects that JavaScript can interact with.

Example:

```js
const aside = document.getElementById("aside");
```

This gives us direct access to the `<aside>` element, allowing us to modify it.

---

### 2. Managing State with Variables

Initially, we learned to handle toggle states using a **boolean variable**:

```js
let sideBarHidden = false;

hide.onclick = function (event) {
  event.preventDefault();
  if (sideBarHidden) {
    aside.classList.remove("hidden");
  } else {
    aside.classList.add("hidden");
  }
  sideBarHidden = !sideBarHidden; // flips the state
};
```

The important part was to declare the state variable **outside** the function, so it keeps its value between clicks.

---

### 3. The `classList.toggle()` Method

We then discovered that we can simplify everything with just one line:

```js
aside.classList.toggle("hidden");
```

This method automatically:

* **Adds** the class if it’s missing
* **Removes** it if it’s already present

It’s equivalent to writing:

```js
if (aside.classList.contains("hidden")) {
  aside.classList.remove("hidden");
} else {
  aside.classList.add("hidden");
}
```

This makes the code **shorter**, **cleaner**, and **easier to maintain**.

---

### 4. How `classList` Works

`classList` is a property of DOM elements that represents the element’s classes as a **DOMTokenList**. You can:

* `add()` → add a class
* `remove()` → remove a class
* `contains()` → check if a class exists
* `toggle()` → switch between add/remove automatically

So yes, `classList.toggle()` is part of **DOM manipulation** — it directly changes the element’s class attribute.

---

### 5. CSS Integration

The CSS controls how the sidebar behaves visually. We use a `.hidden` class to hide the sidebar completely:

```css
.hidden {
  display: none;
}
```

When the button is clicked, JavaScript simply toggles this class — making the sidebar appear or disappear instantly.

---

## ✅ Final Code Summary

**JavaScript:**

```js
const hide = document.getElementById("hide");
const aside = document.getElementById("aside");

hide.onclick = (event) => {
  event.preventDefault();
  aside.classList.toggle("hidden");
};
```

**CSS:**

```css
.hidden {
  display: none;
}
```

**HTML:**

```html
<nav>
  <button id="hide">Hide</button>
</nav>
<div class="main-section">
  <aside class="aside" id="aside">This is the side bar</aside>
  <main>This is the main section</main>
</div>
<footer>This is the footer</footer>
```

---

## 💡 Key Takeaways

* `classList.toggle()` is a part of **DOM manipulation**.
* Always define state variables **outside** of event handlers if you need them to persist.
* `display: none;` in CSS removes the element visually and from layout flow.
* Flexbox automatically resizes elements when siblings are hidden.

---

## 🧭 Next Steps

* Add **CSS transitions** for smooth slide-in/out animations.
* Experiment with **Grid layout** and toggling `grid-template-areas` dynamically.
* Try storing toggle state using **data attributes** (`data-visible`).

---

**Author:** Practicing DOM Manipulation and Flexbox Layouts
**Topic Covered:** Sidebar Toggle, DOM Manipulation, `classList.toggle()`, Flexbox
