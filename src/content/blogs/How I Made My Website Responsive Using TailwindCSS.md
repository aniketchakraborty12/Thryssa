---
title: "How I Made My Website Responsive Using TailwindCSS"
excerpt: "How I used TailwindCSS and a mobile-first approach to make my personal website fully responsive across devices."
pubDate: 2025-08-02
categories: ["Projects", "Tips"]
featured: false
---

When I started working with HTML and CSS, I didn't pay much attention to responsive websites. To be fair, I didn't know about responsive till I was working on my 3rd full website.

To me, responsive design was an annoying option, the one you **had** to do just for your website to have good performance score in Google Analytics. An annoying feature in a website just to be made available for different devices with varying screen sizes.

## Responsive? You Mean Breathing?

But what is mobile responsiveness? Simple answer — it's the ability of a website to adapt and display content on different devices, like smartphone and tablet.

Websites are designed primarily keeping the laptop/desktop screen size in mind, i.e., horizontal oriented. So when a user tries to open the website in mobile, i.e., vertical oriented, the extra content spills out of the viewport. As a result, the user has to horizontally scroll to see the rest of the content, which can be extremely troublesome and unwanted.

Responsive design makes sure that the layout changes with the screen size, and all the contents inside are aligned to that layout even during changes. So the user doesn't have to horizontally scroll to see the rest of the content in mobile.

## ... Is It Really Necessary!?

Yes. That was my first question as well.

I mean, my website is looking so cool in laptop with proper spacing around the sides, horizontally aligned cards, and images in hero section. Why should I ruin the design with decreased spacing, vertically aligned cards, and completely removing the images to fit in the mobile devices?

The answer to that question lies in the stats. According to joingenius.com, over 60% of website traffic comes from mobile devices, and grew 75% between 2015 and 2024. To put things into perspective, 4.32 **BILLION** people access internet via their phones.

Yep, it's that big of a deal.

## CSS Isn't Working. Should I Try CPR?

Now that we've understood just how big of a deal mobile responsive websites are, let's talk about the variety of major issues that spiked during the plain CSS era.

Before I started using TailwindCSS, I was manually juggling `@media` queries, percentages, and `calc()` everywhere. It felt like building sandcastles in a storm. I'd write a layout that looked good in desktop, then patch it up for tablet, then redo it for mobile — and somehow break everything in the process.

In this torrid time, arrived TailwindCSS.

## TailwindCSS: Utility-First Hero

TailwindCSS changed how I wrote CSS — forever.

Instead of writing complex custom styles, I was starting to use utility classes like `px-4`, `grid-cols-1`, `lg:grid-cols-3`, `text-sm`, `md:text-lg`, and so on. It was like having a huge set of LEGO bricks where each piece snapped into place perfectly based on screen size.

Tailwind's mobile first approach made it intuitive. You start by designing for the smallest screen, and scale up with responsive breakpoints.

```html
<div class="p-4 sm:p-6 md:p-8 lg:p-10">
  <p class="text-base sm:text-lg md:text-xl">This text adjusts with screen size!</p>
</div>
```

While it might look verbose at first, it quickly becomes predictable and clean once you get used to it.

## My Approach to Making My Site Responsive

Here's a breakdown of how I approached responsiveness using TailwindCSS:

1. **Start with Mobile**: I designed everything assuming the user is on a phone. This means stacking elements vertically, using smaller texts, and reducing paddings and margins.

2. **Scale with Breakpoints**: Using Tailwind's responsive prefixes (`sm`, `md`, `lg`, `xl`), I updated layouts for larger screens without touching the media queries.

3. **Grid and Flex**: The MVPs of Tailwind styles — they helped me arrange content effectively. For example, cards stacked on mobile could easily become a three-column grid on desktop.

4. **Image Handling**: Hero images were either replaced with smaller ones or completely hidden using `hidden md:block` to save space and load time on mobile.

5. **Testing**: I constantly tested on real devices and used Chrome DevTools' responsive view to simulate screen sizes.

## The Benefits Are... Responsive?

After refactoring multiple websites with TailwindCSS, I noticed a few distinct patterns that pointed towards an overall positive growth of the CSS framework:

- Page load time improved due to optimized layout and fewer CSS files.
- Bounce rate dropped significantly — especially on mobile.
- I didn’t need to touch a single line of custom media query CSS (phew).
- The websites *finally* felt modern, smooth, and inclusive.

## Final Thoughts

No matter how we look at things, responsive design isn't *optional* anymore. It's the **default**. And if you're tired of wrestling with traditional CSS breakpoints, give TailwindCSS a shot. The mobile-first philosophy, combined with utility-first classes, makes responsive design not just doable—but enjoyable.

If you’re still on the fence, just remember: over 4 billion people are browsing on their phones. If your website isn’t responsive, it’s practically invisible to half the internet.

---

And that marks the end of this blog. If you've learned something useful, or would like to add something to this blog, feel free to comment down below. I'll be sure to bring more technical blogs like these in the future.

**Until Next Time!**