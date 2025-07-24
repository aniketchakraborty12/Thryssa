---
title: "Mistakes I Made When I Started Coding"
excerpt: "Reflecting on key mistakes I made when I first started coding—and the valuable lessons I learned along the way."
pubDate: 2025-07-26
categories: ["Tips", "Personal"]
featured: false
---

When I started coding at 17, I was in class 11, and before that, my school didn't conduct proper computer science classes. When they did, it was mostly MSWLogo and MS Paint. So, the introduction of actual 'programming language' was a welcome change from the monotonous depravity of top-tier knowledge.

My first programming language was Python. Extremely easy to learn, no semicolon dilemma, exceptionally powerful and handy, Python quickly captured my attention, and before I knew it, I was already delving deeper and deeper into the syntax and libraries.

My interest graph in programming languages recorded a steep and steady uptick, and now I'm working with multiple languages at the same time, maybe even in the same project. However, certain mistakes are expected when you're working with so many languages for so long. Some are small, easily correctable; others are habits embedded since the beginning.

Today, I'm here to talk about a few of those habits that hinder one's growth and restrict them from achieving their full potential. These are the ones I've personally experienced and corrected, and I hope through this article, you can do it too.

Here are some common mistakes I made when I started coding:

## Programming Language Specifics

Over the years, certain mistakes regarding programming language get ironed out. However, it'd be better if the habit of using correct techniques are prioritized and taught since the initial phases. Some mistakes and vices related to programming languages are given below —

### Not Using List Comprehensions Efficiently

For example, you're writing a syntax in Python to create a list of even squares. Usually, the code would look like —
```python
even_squares = []

for number in range (1,11):
    if number%2==0:
        squared_number = number**2
        even_squares.append(squared_number)

print(even_squares)         #Output: [4, 16, 36, 64, 100]
```
Number of lines? 6.

Now let's use list comprehension to solve the same problem.
```python
even_squares = [x**2 for x in range(1, 11) if x % 2 == 0]

print(even_squares)  # Output: [4, 16, 36, 64, 100]
```
Number of lines? 2.

You can see the LOC (Lines of Code) decrease 3-folds. This becomes so much important once the SDLC comes into play. Moreover, the code didn't become incomprehensible. In fact, the general syntax of list comprehension is —
```python
[expression for item in iterable if condition]
```
In the above line of code, `x**2` was the expression, `x` is item, `range(1, 11)` is iterable, and `x % 2 == 0` is condition.

As you can see, list comprehensions significantly reduce code length, making it more readable and efficient, especially as projects scale. It's that easy, ladies and gentlemen.

### Avoiding Front-End Frameworks (Like React/Next.js)

Throughout the course of 3rd-year, I had worked with HTML, CSS and JavaScript only. I subconsciously trained myself to believe that I had to master the basics before diving into frameworks. **I was wrong**.

You see, I had already completed HTML, CSS & JavaScript in about 7 months, taking into account the accordions, tables, websites, etc. The remaining 5 months were 'wasted' behind aimlessly creating the same websites over and over again. It took a hackathon and a heartbreak to make me realize that I was falling behind schedule.

Avoiding frameworks like React, Next, or Astro is a rookie mistake, as they streamline development by handling state management, routing, and component lifecycles. Building from scratch leads to unnecessary complexity and inefficiency. 

These frameworks also offer strong community support, rich ecosystems, and extensive documentation, which help reduce the learning curve and improve growth. Without them, developers face more challenges, which results in hindered progress and increased frustration.

### Misunderstanding Pointers

Pointers — I **hate** them. So steep learning curve, confusing for beginners, and an overall extremely demoralizing topic to cover. Safe to say, pointers single-handedly kept me away from C++ for 2 whole weeks. However, there's no denying the efficiency of pointers, as they are key to memory management.

Pointers allow direct manipulation of memory, but developers risk introducing bugs like memory leaks, segmentation faults, or undefined behavior without proper knowledge of how pointers work. As pointer requires the programmer to manage memory allocation and deallocation manually, it is easy to forget to free memory, leading to resource wastage and degraded performance over time.

Like many rookie developers, you might find yourself tangled in memory management tasks. The good news is — modern C++ has a feature called smart pointers, or you can even work with garbage-collected languages. These help reduce the problem of accessing invalid memory locations due to improper pointer usage, which might cause the program to crash unexpectedly.

## Coding Complexities

Some mistakes precede the boundaries of programming languages and get embedded deep inside the minds of programmers like leeches. You carry them throughout your programming journey, unaware that you're unintentionally harming your own growth via these actions.

Here are a few general coding habits you should get rid of ASAP —

### Jumping Into Complex Projects Too Soon

The scenario goes like this — you've started a new programming language and are finding it extremely easy and fun to work with. You see so many potential high-profile projects you can create as you reach an advanced level, and you're overjoyed. Awestruck, you decide to take the leap and start a complex project while learning the basics.

**Bad Idea...**

There is a reason why it is a high-profile project, it contains extremely complicated principles and libraries with dizzying code. Soon you'll find yourself overwhelmed, detached, and will gradually fall out of love with the language entirely. All of this could've been avoided if you were a bit patient and learned the basics first.

Trust me, I was there too. I started Python and after 2 months, went straight to Pygame to create games. It went as expected — I quickly found out it wasn't my cup of tea just yet, and I returned to basics.

**Tip**: Trust the process. (Not an Arsenal reference)

### Skipping Documentation and Commenting Code

During early days, we were constantly reminded to comment our code to make it easier to read and figure out. At first, it seemed like a hassle, and I expectedly fell out of that practice. As I grew older, though, time after time I was reminded of just how important commenting code was. 150+ lines of code for every component, and you had to go through each one to find the line containing the error.

Documentation was another obstacle I had to overcome. I was uninterested to document before writing the code and dead tired after writing it. "This code is only for me. Why should I document the progress?" I thought to myself. The stern reply was, "It is extremely important once you show your repositories to interested parties."

Documentation and commenting code are two very important habits the rookie developers must instill. These will help them reduce development time and learn important programming techniques.

### Neglecting Version Control Workflow

I once had 27 Python projects (most were Pygame), 4 C/C++ projects, 13 vanilla web development projects, and 5 React.js projects. However, my GitHub profile (at the time of writing) contains 21 repositories — 6 Python, 1 vanilla web dev, 6 React.js, 7 Next.js and 1 Astro.js project.

All of my Pygame projects were lost, and I lost numerous vanilla web dev projects. Version control like GitHub is essential not only when you're working with a team, but also when you're working in a big project. You'd want to save your timely progresses in GitHub so that any mistake does not have lasting effect as you have the ability to backtrack to the previously saved folder.

It is like always saving in a game, so that any mistake with the final boss does not let you lose your hard-earned coins. You can always load the last save file and play from that point.

Learn GitHub and Git to strengthen your coding habits and increase the chances of getting hired.

## Self-Care

I talked a lot about programming and languages, but some external factors are also important to notice when you're aspiring to become a good developer. It’s crucial to take care of your well-being and reduce the mental toll a project can have. Here are some important self-care vices a rookie developer has to go through —

### Ignoring Breaks and Burnouts

14 hours. That was once my regrettable streak when I started learning React. I would spend around 14 hours learning and code for multiple days, till my I learnt most of the hooks. Eventually my body gave way.

I constantly felt drained, even after getting 6 hours of sleep. I couldn't focus much on the things I was studying, which further led to more time being invested. After what felt like eternity, I decided to chop my hours and focus on learning 1 hook correctly rather than finishing 5–7 hooks every day.

The result? I gradually started to feel more energized and focused, and ironically, I started learning more hooks with less time than before. Burnouts are real, they affect your ability to learn, and it is extremely essential to take timely breaks to avoid this circumstance.

The best way is to split the tasks and add breaks in between. Stay hydrated at all costs — it is better to have a hook pending than be dehydrated. Keep constant checks on your stamina and energy, and take a break anytime you feel stressed.

### Blurring Boundaries Between Work and Personal Life

Those 14 hours I talked about previously had a bigger impact on my life than just burnouts. I had almost negligible human interactions, barely left my room to go out, and staring at the screen for so long made my eyes hurt. My family was stressed, I slowly began losing my friends, and my body was deteriorating by the day.

A small pep-talk: No job, no matter how important, should ever come at the expense of your personal life. Prioritize your personal life first, you will have ample time to learn coding. Socialize, because being cooped up in front of a laptop does not help any cause. Fix your schedule, follow it, and you'll see better productivity.

---

Mistakes are part of life, and while we can’t avoid making them, we can certainly minimize their frequency and impact. By learning from our mistakes and not repeating them, we grow as developers—and as people

That is all from my part. If you've learned something from the blog, make sure to comment down below. Thank you for reading.

**Until Next Time!**