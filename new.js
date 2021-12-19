const fs = require("fs")
const program = require("commander")
const { prompt } = require("inquirer")

var yesNo = {
  yes: true,
  no: false,
}

/**
 * COMMANDER TERMINAL INTERFACE
 */
const questions = [
  {
    type: "input",
    name: "postTitle",
    message: "Tentative title? (spaces will be hyphenated)...",
  },
  {
    type: "list",
    name: "shouldGenerateImagesFolder",
    message: "Generate /images subfolder? ...",
    choices: Object.keys(yesNo),
  },
]

program
  .version("0.0.1")
  .description("Generate a new folder that contains a blog post")

program
  .command("post")
  .alias("p")
  .description("Generate a new post folder")
  .action(() => {
    prompt(questions).then(answers => {
      generatePostFolder(answers)
    })
  })

program.parse(process.argv)

/**
 * MAIN PROCESS
 */
const generatePostFolder = async function ({
  postTitle,
  shouldGenerateImagesFolder,
}) {
  const blogDir = __dirname + "/content/blog"
  const date = getCurrentDate()
  const newPostDir = `${blogDir}/${date}-${postTitle
    .toLowerCase()
    .split(" ")
    .join("-")}`
  console.log("newPostDir:", newPostDir)

  try {
    const createdDir = fs.mkdirSync(newPostDir, { recursive: true })

    if (shouldGenerateImagesFolder) {
      fs.mkdirSync(`${newPostDir}/images`, { recursive: true })
    }

    const frontmatter = `---
title: "${postTitle}"
date: "${date}"
excerpt: 
tags: []
type: 
fav: false
---

`

    fs.writeFileSync(newPostDir + "/index.md", frontmatter)
  } catch (err) {
    throw err
  }
}

function getCurrentDate() {
  const d = new Date()
  const year = d.getFullYear()
  let month = "" + (d.getMonth() + 1)
  let day = "" + d.getDate()

  if (month.length < 2) {
    month = "0" + month
  }
  if (day.length < 2) {
    day = "0" + day
  }
  return [year, month, day].join("-")
}
