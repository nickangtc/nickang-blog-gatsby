---
title: "ChatGPT use cases for Software Engineers"
date_published: "2023-12-27"
date_updated: "2023-12-27"
excerpt: "A growing list of use cases of AIs, including ChatGPT and GitHub Copilot."
tags: ["Collection", "Productivity"]
fav: false
---

ChatGPT is eating the world, and it's particularly powerful at doing knowledge work like programming. Yet, most articles on the internet are focused on selling you tips and tricks for prompt engineering instead of showing you practical examples of how ChatGPT (especially GPT 4) is being used by real software engineers in their work.

This page is my attempt at slowly accumulating use cases of ChatGPT and other AIs that I've discovered -- mostly by direct use -- for software engineers, programmers, and developers.

## GH Copilot explaining build code

Code that's gone through some kind of build pipeline usually comes out obfuscated. This can happen even if you configured Vite or Webpack to not minify the output, because often they rely on already-minified third party packages that need to be bundled into a single file.

But sometimes you just need to read code post-build to verify that something is in it, or to study how it'll work on the client side (e.g. is it going to pollute the global namespace? Would it conflict in any other way with the rest of the client-side JavaScript?). That's when Copilot came in handy for me.

![screenshot of github copilot explaining code based on highlighted chunks of obfuscated code in the editor](images/copilot-help-explain-build-output.PNG)
