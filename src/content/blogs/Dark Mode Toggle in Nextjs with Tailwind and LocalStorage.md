---
title: "Dark Mode Toggle in Nextjs with Tailwind and LocalStorage"
excerpt: "Learn how to implement a dark mode toggle in Next.js using Tailwind CSS and persist user preference with localStorage."
pubDate: 2025-08-09
categories: ["Projects", "Tutorial"]
featured: false
---

Ah, the **"Dark Mode Dilemma"**.

Throughout my entire journey as a web developer, I never struggled as much as I did with finding a good way to implement dark mode. I mean, I watched a minimum of 10 videos to implement dark mode using CSS. Even after shifting to Tailwind, it took me 3 weeks to gather the courage to test the dark mode, and 3 hours to properly implement it.

Now, dark mode needs no introduction. The most toggled button in the entirety of the web, dark mode was nothing short of a miracle when unveiled.

## A Dark ~~Age~~ Mode Craze?

But why should the developers (a.k.a. you) bother to implement dark mode in your website in the first place? The cream-palette background certainly looks clean, the texts are visible, and the overall website looks attractive. So why ponder and stress on a functionality that might seemingly render your website unmanageable if not programmed properly?

### It's All About the Experience

User experience should be the priority of the developer when creating a website. The better the UX, the higher the chances of that website being used frequently.

According to multiple studies, dark mode is beneficial for the battery life on OLED screens. According to [UXPin](https://www.uxpin.com/studio/blog/dark-mode-benefits/#:~:text=the%20waking%20day.-,Dark%20mode%20extends%20battery%20life,longer%20while%20in%20dark%20mode.), iPhones get a 33% battery increase in battery life just by switching to dark mode during streaming videos. While the effect is negligible in LCD screens, OLED screens benefit massively from this.

Furthermore, citing [eyecarecenter](https://www.eyecarecenter.com/eye-care-resources/is-dark-mode-better-for-your-eyes), dark mode limits the amount of blue light that reaches the eyes. Exposure to blue light from phones mimics sunlight, making it harder to fall asleep. Dark mode's blue light filter has been shown to help encourage nighttime melatonin production, regulating an individual's circadian rhythms. Dark mode also helps reduce eye strain and facilitates people to work for a longer period without interruptions as compared to normal light mode.

### It's Popular, It's Trending!

There's no denying that dark mode is trending among the youth. Due to its sleek aesthetic, better visuals, and easier manoeuvring capabilities, people have been quick to catch up to the functionality.

And the best part? It is extremely easy to experiment with the components to suit one's taste. Palettes like dark grey/charcoal, branded customised dark mode, adaptive dark mode, or inverted colour schemes — a web developer has all the hand-me-downs on their fingertips.

Couple up UX with popularity, and you'll get the reason behind dark mode's dominance. Barely comprehensible, justifiably admirable.

## Time to Get Dirty

Now that we've understood the "WHY?", time to work on the "HOW?" part. We will be using TailwindCSS with Next.js for this blog. Let's do it step-by-step:

### Installing Next.js and TailwindCSS

To build a Next.js project, we first need to create one. Navigate to the directory you want your project to be in, open Windows Terminal, and paste this code:

```terminal
npx create-next-app@latest [your-app-name] --ts
cd [your-app-name]
```

You've successfully created your Next.js project and changed your directory to it. Now to install TailwindCSS, paste this in your terminal:

```terminal
npm install tailwindcss @tailwindcss/postcss postcss
```

Open your code editor in the path of the project directory, and create a `postcss.config.mjs` file in the root of the project. You have to then add this code to the file:

```js
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
export default config;
```

Then, go to `src/app/globals.css` and import TailwindCSS by pasting this line:

```css
@import "tailwindcss";
```

Voila! You now have TailwindCSS in your Next.js project.

### Configuring Dark Mode in Config

After you've kickstarted your project, create a few components and utilise them in your website. For now, an SPA \(Single Page Application\) would do just fine. We'll now move on to the simplest of tasks — configuring Tailwind to enable dark mode via class strategy. I know, it sounds complicated.

Open `tailwind.config.ts` \(create one if you don't have\) and paste this code:

```js
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}
```

See a line called `darkMode: 'class'`? That was the only line we had to add. Now, we're ready to create the logic for dark mode.

## Eclipse Incoming!?

Now that the initial setup of dark mode has been established, we can finally pull up our sleeves and prepare ourselves for a deep dive into the dark matter. What we've done so far is create a platform to launch ourselves from. It is now time to cover the code bases.

### Set Up a Global Theme State

First, we create a component called `theme-provider.tsx` in the `components` directory. This will be the backend logic for our theme toggle — responsible for checking the current theme and toggling it when the respective button is pressed.

```tsx
'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

type ThemeContextType = {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as Theme | null
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initialTheme = storedTheme ?? (prefersDark ? 'dark' : 'light')
    setTheme(initialTheme)
    document.documentElement.classList.toggle('dark', initialTheme === 'dark')
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within ThemeProvider')
  return context
}
```

You can see how `storedTheme` checks the localStorage for theme, and `toggleTheme` function sets the localStorage theme to the opposite theme. This is how we plan to use localStorage in theme toggling.

Now that the backend logic is established, we can move forward with the frontend button.

### Create the Toggle Theme Button

Building the frontend is comparatively easier. We create another component in the `components` directory named `theme-toggle.tsx` for the frontend aspect. This is actually contain the button that is being pressed.

```tsx
'use client'

import { useTheme } from './theme-provider'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode
    </button>
  )
}

export default ThemeToggle
```

See something familiar? The `useTheme` custom hook is the *same* hook that was created at the end of the backend logic. You can see how the `theme` variable derives the localStorage value from the previous backend component to check the current theme, and the button toggles the current theme \(i.e., the value of localStorage\) on click.

We're approaching the final stages of the steps.

## Paint the Theme

Now that all the necessary components are established, we can join the pieces together in the frontend. The backend logic will be present in the layout file, and the button in the index file. Without further ado, let us finish the job.

### Use Theme Provider in Layout

As mentioned earlier, the `ThemeProvider` function will be present in the `layout.tsx` to make sure that the changes in theme are displayed throughout the website. Modify your `app/layout.tsx` to something like —

```tsx
import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dark Mode with App Router',
  description: 'Next.js 15 + Tailwind CSS + TypeScript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

We enclosed the `{children}` with the `ThemeProvider` for the aforementioned reason — displaying the theme \(and changes\) throughout the website.

### Use Toggle Button in Home Page

In your `app/index.tsx` file \(or navbar\), add the `themeToggle` button.

```tsx
import ThemeToggle from '@/components/theme-toggle'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-gray-900 text-black dark:text-white">
      <h1 className="text-3xl font-bold mb-6">Next.js 15 Dark Mode</h1>
      <ThemeToggle />
    </main>
  )
}
```

This will provide the necessary interface that the users can operate on.

***And voila!!!*** Your theme toggle interface is ready to go.

## Before Darking the Room

Theme toggle is an important aspect of modern websites. Many people with special conditions require a specific theme to make sure they can operate efficiently. It is high time the budding developers treat it as a necessity rather than an optional feature. Moreover, working with the theme toggle will boost their knowledge on hooks and localStorage, some pretty important functionalities in web development forums.

---

That is all from my side. Please feel free to notify me about any issues in the comment section. I'll be back again with another educational blog soon.

**Until next time!**
