---
title: "Write quicker tests with console.assert and blocks"
date_published: "2021-12-23"
excerpt: 
tags: ["Tech"]
type: "Everydays"
fav: false
---

Apparently `{}` can be interpreted by the JavaScript engine as a block and not an object. That's the first learning.

The second learning is that the built-in `console` object has an `assert` method that you can use for super simple and quick testing. The method signature is `console.assert(boolean_expression, message_if_fail)`.

Combine these two learnings and you have neat way to write quick and dirty tests in the same file as your implementation!

(I faced issues pushing to github for deployment due to the size of the embedded video, so I removed it. You can still view it here: https://www.instagram.com/p/CX17n8LIDbG/)

Here's the code block from the video with some annotations:

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

