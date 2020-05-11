---
title: "How to add default value to dropdown HTML (I did not know)"
date: "2018-02-02"
---

So, I'm currently teaching a front-end web development course at [General Assembly](http://www.generalassemb.ly/), and one of the best things about being an instructor is that you get asked questions all the time.

Broad questions, specific questions, out-of-left-field questions. Every class has students asking them, and it's awesome!

Sometimes, a student's question is something you'd never thought of, or it's related to something that you've just never had the chance to use at work or on side projects. Those are arguably the best opportunities for both the student and teacher to grow, and I relish them as they appear.

The great thing about very specific questions is that I'd have to google for the answer in front of the students. This indirectly demonstrates and hopefully imparts the meta-skill of googling for esoteric programming topics. That, and I get to learn something new too.

What's not to like?

Ok, on to the answer that you're probably here for.

## Adding default value to dropdown HTML

Let's get one thing straight: this is _not_ obvious at all. So if you're feeling at all embarrassed that you don't know it already, don't. I had to google for this answer in front of my class because I didn't know it either!

Here is HTML for a normal `<select>` dropdown:

Select course:
 Web Development Immersive
    User Experience Development Immersive
    Data Science Immersive 

The above would render a dropdown with a default value pre-selected to be the first item in the list. So if the user hits "Submit" in the form, the value for the "course" field would default to "web-dev". That's no good!

Here's the HTML you should add to give it a default value, which functions sort of like a placeholder:

Choose here

Resulting HTML that has a default value:

Select course:
 Choose here
    Web Development Immersive
    User Experience Development Immersive
    Data Science Immersive 

Totally non-obvious answer. Hope it helped.

Happy developing!
