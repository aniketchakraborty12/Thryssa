---
title: "Understanding useEffect in React — A Real-Life Approach"
excerpt: "How I learned and explained React’s useEffect hook using real-world analogies and simple examples."
pubDate: 2025-07-22
categories: ["Tips", "Tutorial"]
featured: false
---

Imagine this scenario — you&apos;ve entered your home after a long day shift at your 9-5 job. What are the immediate actions that follow?
- Opening the gate to enter.
- Remove your shoes and keep them in their place.
- Get rid of the sweat-drenched clothes.

All of these always happen irrespective of the day if you go to work. Let us call them *'Unconditional Tasks'*. However, what about the tasks that needs a condition to be fulfilled?
- Keep your car keys safely if drove car.
- Cooking food if not already prepared.
- Watching a series if not sleepy enough.

See a similarity? Every action has an "if" condition that is only triggered when a certain situation arises. We can call them *'Conditional Tasks'*.

With this situation out of the way, let&apos;s dive into the concept of `useEffect`.

## use...Effect???

What is `useEffect`? Well, `useEffect` is a popular React hook that lets you synchronize your component with an external system. To put it plainly, `useEffect` helps a component work with conditions based on a particular situation.

### Side (use)Effect

React&apos;s rendering is pure and synchronous — that means React will render your component, calculate the UI, and return it without any side effects. However, certain real-world tasks like making API calls or setting timeouts have side effects. `useEffect` lets you work with those specific side effects and use it to your own benefits.

`useEffect` has 3 primary components in its structure — effect function, cleanup function & dependency array.

### Effect Function

Effect function is the main body of `useEffect`, a function that runs after the component renders. You can use it to run side effects like — fetching data, subscribing to events, manually manipulating DOM, etc. Here's a suitable code snippet to explain the effect function:

```
useEffect(() => {
    document.title = `You clicked ${count} times`;
}, [count]);

```

Think of it like a to-do list when you check a task after it&apos;s completed.

### Cleanup Function (optional)

Cleanup function runs just before the component unmounts or the effect re-runs (when dependencies change). It is used to prevent memory leaks or remove subscriptions.

```
useEffect(() => {
    const intervalId = setInterval(() => {
        console.log("Tick");
    }, 1000);

    return () => {
        clearInterval(intervalId); // Cleanup
    };
}, []);

```
Think of it as cleaning your table after having breakfast so that you can have lunch on a clean table when the time comes.

### Dependency Array

The crown jewel of the hook, it controls when the effect runs. It can be considered as a list of values that the React watches, and changes in any of them results in the effect re-running. There are multiple ways of working with a dependency array.

- [] — Run once (on mount)  


```
useEffect(() => {
    console.log("Runs only once after initial render");
}, []);
```

> Like doing a flight safety check only once after takeoff.

- [someState] – Run When someState Changes
```
useEffect(() => {
  console.log("Runs when 'name' changes");
}, [name]);
```
> Like updating your GPS when you change routes.

- No Dependency Array – Run on Every Render
```
useEffect(() => {
    console.log("Runs after every render");
});
```
> Like checking your phone every 5 seconds, even if nothing changes.

## Let There Be Examples

`useEffect` can be applied in various different situations to render different intended side effects and results. Some of the most common ones are given below.

### Dial the Code, Call API

Take the example of making an API call. Suppose you have a weather app that fetches weather data from a different API, and that API isn&apos;t the fastest. Now React will definitely render your weather page and component seamlessly, and before your data arrives (talk about a slow API).

If you have an "if" block in the weather component, React will check if the data has arrived during rendering, and upon failure to retrieve the data, will go to the else block and render that code instead, presumably a "Your data cannot be fetched at this moment" text.

`useEffect` helps by rendering that specific component after the data is fetched from the API.

```
useEffect(() => {
    fetch("https://api.example.com/products")
        .then(res => res.json())
        .then(data => setProducts(data));
}, []);

```

### Did You Start the Timer?

The next example can be that of a timer. Suppose you have a timer for a task you want to do, and you want it to 'tick' every second. However, you fear that if we follow the traditional method of setting timers, then the timer might start from the moment it last stopped.

`useEffect` makes it so much easier with its cleanup function that is responsible to dispose the timer once your task is over.

```
useEffect(() => {
    const interval = setInterval(() => {
        console.log("Tick");
    }, 1000);

    return () => clearInterval(interval); // Cleanup
}, []);

```

### "I Swear It Changed-"

You press the 'Add to Cart' button, expecting the cart items count to increase, but it doesn't. You made sure your `useState` logic was correct, in fact you did a console.log to test out, and it was working. Then what is the problem?

The problem is React does not change the UI based on interactions without `useEffect`. `useEffect` makes sure that the count increases when you apply the cart items in the dependency array. So every time the amount of items in cart changes, the `useEffect` has to re-run because the value in dependency array is being altered.

```
useEffect(() => {
    if (cartItems.length > 0) {
        setShowCheckout(true);
    }
}, [cartItems]);
```

### Let That Fade In...

Adding animation to a component has to be one of the worst tasks to perform during pressure. Imagine working with libraries like Framer-Motion, GSAP etc. and then you're confused as to how to add the animation during the start and never trigger again. You're tearing your hair out, and then... **BAAM!** `useEffect`.

`useEffect` makes it easy to add and remove classes upon mounting using empty dependency list.

```
useEffect(() => {
    const element = document.getElementById("fadeIn");
    element.classList.add("visible");

    return () => element.classList.remove("visible");
}, []);
```

### So The Theme Is-

So I already talked about animations, but now let's take about themes. Dark themes have been pretty easy to work with using Tailwind CSS, except some people still resort to `useState` for storing themes. `useState` literally reverts every reload.

`useEffect` lets the user store the theme to localStorage and change it every time the user manually changes the theme using a button.

```
useEffect(() => {
    localStorage.setItem("theme", theme);
}, [theme]);
```

## The Final (use)Effect

`useEffect` has been a brain-twister for quite some time now, and it certainly doesn't get easier for newbies over time. However, once acquired the knowledge of using it correctly, `useEffect` can be considered par to `useState`, if not better (high praise coming from me). Dependency array has garnered uncountable fans for its unrestricted ability to control `useEffect`, and React sees high value in the coming future from its misunderstood heroic hook.

---

So that was it from my part about `useEffect`. I hope you have taken something valuable away from this blog. I'll be sure to bring many of these tutorials in the coming weeks.

**Until Next Time!**