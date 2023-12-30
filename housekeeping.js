const fs = require("fs")
const program = require("commander")
const { prompt } = require("inquirer")

const BLOG_PATH = "/content/blogcopy"

const yesNo = {
  yes: true,
  no: false,
}

const questions = [
  {
    type: "list",
    name: "shouldTagAsPersonal",
    message: "Is this personal? ...",
    choices: Object.keys(yesNo),
  },
]

// Get all directories in the blog directory, excluding .DS_Store
const getPostDirs = async function (blogDir) {
  const posts = await fs.readdirSync(blogDir)
  return posts.filter(post => post !== ".DS_Store")
}

// Check if a post is already tagged as personal
const isPostAlreadyTagged = async function (postDir) {
  const post = await readPost(postDir)
  const lines = post.split("\n")
  const tagsLineIndex = lines.findIndex(line => line.startsWith("tags: "))

  if (tagsLineIndex !== -1) {
    const tagsLine = lines[tagsLineIndex]
    return tagsLine.match(/"\bPersonal\b"/)
  }

  return false
}

// Add a personal tag to a post
const tagPost = async function (postDir) {
  const post = await readPost(postDir)
  const lines = post.split("\n")
  const tagsLineIndex = lines.findIndex(line => line.startsWith("tags: "))

  if (tagsLineIndex !== -1) {
    lines[tagsLineIndex] = addTagToLine(lines[tagsLineIndex])
  } else {
    addTagToNewLine(lines)
  }

  writePostBackToDisk(lines, postDir)
}

// Add a personal tag to an existing tags line
const addTagToLine = function (tagsLine) {
  const tags = tagsLine
    .replace("tags: ", "")
    .replace("[", "")
    .replace("]", "")
    .split(",")
    .map(tag => tag.trim())
  tags.push(`"Personal"`)

  console.log("====================================")
  console.log("✅ Added Personal tag to post!")
  console.log("====================================")
  return `tags: [${tags.join(", ")}]`
}

// Add a personal tag to a new line
const addTagToNewLine = function (lines) {
  console.log("====================================")
  console.log("✅ Added new tags line with Personal tag to post!")
  console.log("====================================")

  // find first occurrence from top of post of a line that starts with ---
  // insert new tagline after that line
  const firstLineIndex = lines.findIndex(line => line.startsWith("---"))
  lines.splice(firstLineIndex + 1, 0, `tags: ["Personal"]`)
}

// Write the post back to disk
const writePostBackToDisk = function (lines, postDir) {
  const newPost = lines.join("\n")
  const postPath = `${__dirname}${BLOG_PATH}/${postDir}`
  fs.writeFileSync(`${postPath}/index.md`, newPost)
}

// Print the first few lines of a post
const printFirstLines = async function (postDir) {
  const post = await readPost(postDir)
  const lines = post.split("\n")
  const firstLines = lines.slice(0, 15).join("\n")
  console.log(`\n\n${firstLines}\n\n\n`)
}

// Read a post from disk
const readPost = async function (postDir) {
  const postPath = `${__dirname}${BLOG_PATH}/${postDir}`
  const post = await fs.readFileSync(`${postPath}/index.md`, "utf8")
  return post
}

// Review all posts and tag them as personal or not
const getPostsAndStartReview = async function () {
  const blogDir = __dirname + BLOG_PATH
  const postDirs = await getPostDirs(blogDir)

  for (let i = 0; i < postDirs.length; i++) {
    const postDir = postDirs[i]

    const isAlreadyTagged = await isPostAlreadyTagged(postDir)

    if (isAlreadyTagged) {
      continue
    }

    printFirstLines(postDir)

    const answers = await prompt(questions)
    if (answers.shouldTagAsPersonal === "no") {
      console.log("====================================")
      console.log("👌 Did nothing.")
      console.log("====================================")
      continue
    }
    await tagPost(postDir)
  }
}

program
  .command("review")
  .alias("r")
  .description(
    "Review posts one by one and tag them as 'Personal' or not. Those with the 'Personal' tag already will be skipped."
  )
  .action(getPostsAndStartReview)

program.version("0.0.1").description("Adds a 'Personal' tag to a post")

program.parse(process.argv)
