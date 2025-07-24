---
title: "How I Built My Personal Portfolio with Next.js and TailwindCSS"
excerpt: "How I built and deployed my portfolio using Next.js and TailwindCSS — from structure to launch."
pubDate: 2025-07-19
categories: ["Projects", "Tutorial"]
featured: false
---

Let’s be real — everyone needs a portfolio these days. Whether you’re a fullstack dev, a game designer, or even a travel agent, your portfolio is your digital handshake. It shows off what you do, what you’ve built, and what you’re proud of. Think of it like your personal highlight reel — projects, skills, achievements, and all that good stuff. It’s not just about looking professional; it’s about standing out and making it easy for people to see what you’re all about.

That is precisely the reason why your portfolio should equally be crafty, fast and descriptive. While your CV is just a stacked page, your portfolio is an open canvas. You can add 3D shapes, trigger animations, blend colours to look appealing and everything else without restriction.

With that said, let me show you how I made my portfolio that both shows off my technical skills as well as soft skills and attention to detail.

## Get Paints, Set Canvas, & Go

Before we start building our portfolio, it is important we assess what, how, and where we want to put our sections, how many pages do we need, and how are we planning to approach the task at hand.

### Wireframing

First things first — I needed to plan the layout. I sketched a rough wireframe to figure out the structure of my site. What sections do I want? Hero, Soft Skills, Project Overview, Call To Action — the basics, right? But also: should I add a blog? A dark mode toggle? A downloadable résumé?

I used Figma to create the wireframe and design where each section should go and how users should manoeuvre through the site (if you haven't watched the previous blog, [click here to read it now](https://thryssa.vercel.app/blog/top-7-tools-i-use-as-a-frontend-developer-every-day)). Trust me, you wouldn't want to make design choices in code without a proper plan, that is a definite recipe for disaster.

Once the blueprint was ready, I moved on to picking the tech stack.

### Tech Stack(ed)

Choosing the tech stack was probably one of the easiest jobs I had to do throughout the project. The plan was simple — I wanted my portfolio to be fast, able to handle multiple components and flexible. And if you know **Next.js**, well, you'll know why I chose those specific requirements.  
Next.js provides a great developer experience with its file-based routing, server-side rendering, and built-in static site generation (SSG) — perfect for a fast, SEO-friendly portfolio. For styling, I opted for TailwindCSS because of its utility-first approach that allows for rapid, responsive design.

Other tools I used were:  
1. Shadcn/UI — for clean and reusable components.
2. Lucide.dev — for necessary icons.
3. Vercel — for quick deployment and CI/CD.

With this, I was ready to start coding.

## <> Ready for the Code? </>

No more delaying the inevitable, it was time to code, to build the portfolio that would hopefully garner attention for being interactive and fresh. I created a Next.js project and initially started creating pages.

### ~Components~ Endless Mess

My structure was set.  
Home page was supposed to have Hero section with a flip-on-hover image, my introduction, description, and 3 adjectives describing me. Soft Skill section had 3 soft skills (duh) befitting me. Projects section would have 4 selective projects with a redirect button. Finally, CTA section would have a button that allows the user to contact me via mail.  
About page contained my background, education and skills section.  
Projects page contained the entire list of projects.  
Throughout the pages, Navbar remained constant with my name, links to each page, and icons to download my résumé or go to my LinkedIn or GitHub profile.

With all these set, I started creating the components first. The basic components such as the soft skills section, CTA, background, education, etc. went smoothly. However, problem arose when I encountered the flipping image and skills section. It took 3 days for me to code and complete both the sections consecutively.

### SVG (Seriously Very Glitchy) Dilemma

Now I had already decided my color scheme — gradient from deep red to deep blue. The background image had a similar tone, and even the colour of the text was adjusted accordingly. SVGs, however, had other ideas.

Now, the people who have worked with SVGs know how hard it is to apply gradient colours on SVG. Moreover, this was my first time trying to work out how to do it. Big ups StackOverflow and the kind people out there, I managed to somehow apply gradient on all the SVGs.

Thank you Lucide.dev, and thank you StackOverflow.

### Final Unskillful Straw

I think "fan of EAFC (previously FIFA)" would summarize my thought-process behind deciding to stat-ify my skills section. It was simple — split your skills into different categories, rate your individual skills like stats, and ultimately rate the category stat on the average of all stats in that category.

I was facing serious issues trying to make the stat bar of the category look semi-circular. The stat bar would continuously bloat, or be completely circle, and occasionally remove the colour (stat) out of the bar. ChatGPT came to my rescue and somehow made it look pretty.  
I didn't dare make it animated. I was afraid.

## Deployment

Page routing of Next.js and components made it easy for me to put together everything and call it a day. My portfolio was ready to be hosted and shown to the internet. For hosting, I looked no further than Vercel, a hosting platform made by the creators of Next.js.

Vercel made it exceptionally easy for me to deploy. I had to push my code to a GitHup repository, and let Vercel access that repo to gather all the files. I then sat back and let Vercel deploy it effortlessly. Within minutes I had my portfolio up and ready, and I changed my public domain to match my name.

And *voila*.

My portfolio was up and running.

## Final Takeaways

You can go visit my portfolio from the home page of this blog website, or [click here](https://aniketchakraborty.vercel.app/). If you've taken away something valuable from this blog, feel free to let me know (CTA of my blog).

If you're indecisive between choosing Astro.js or Next.js, go for Astro.js. Astro.js is way faster and easier to implement, and even if you do need to add some React components, Astro integrations make them look as easy as any other component.

---

Remember, it's not the tech stack, or the components, or the deployment errors that are getting in your way. It's your double-mindedness. *Keep your head down while working, and up while presenting*. Believe in your capabilities, and the portfolio will be stacked before you know it.

If you liked the blog, make sure to comment down below.

**Until Next Time!**