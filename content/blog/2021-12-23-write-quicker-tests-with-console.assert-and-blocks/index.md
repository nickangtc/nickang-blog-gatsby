---
title: "Write quicker tests with console.assert and blocks"
date: "2021-12-23"
excerpt: 
tags: ["Tech"]
type: "Everydays"
fav: false
---

Apparently `{}` can be interpreted by the JavaScript engine as a block and not an object. That's the first learning.

The second learning is that the built-in `console` object has an `assert` method that you can use for super simple and quick testing. The method signature is `console.assert(boolean_expression, message_if_fail)`.

Combine these two learnings and you have neat way to write quick and dirty tests in the same file as your implementation!

<video controls width="350">
    <source src="/images/console-assert-block-quick-testing.mp4"
            type="video/mp4">
    Sorry, your browser doesn't support embedded videos.
</video>

Here's the code block from the video with some annotations, which would still probably only makes sense if you viewed the video:

```js
/**
 * ⚡️ ⚡️ ⚡️
 * How to do quick & dirty testing
 * with console.assert & blocks
 * ⚡️ ⚡️ ⚡️
 */

class Cache {
  // implementation
}

// test 1
{
  const cache = new Cache({maxSize: 10})
  cache.add('key1', 'value1')
  console.assert(cache.get('key1') === 'value1', 'Key value pair gets stored correctly')
}

// test 2
// note that it initialises another variable called cache without an exception
// because they are contained in their own block scopes.
{
  const cache = new Cache({maxSize: 3})
  // do...
  // test console.assert(cache)
}
```

