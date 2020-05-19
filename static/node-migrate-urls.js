const PATH_TO_BLOG_CONTENT = require('path').resolve(__dirname, '../content/blog')

const fs = require('fs')
const path = require('path')

function findInDir (dir, filter, fileList = []) {
  const files = fs.readdirSync(dir)
  
  files.forEach((file) => {
    const filePath = path.join(dir, file)
    const fileStat = fs.lstatSync(filePath)
    
    if (fileStat.isDirectory()) {
      findInDir(filePath, filter, fileList)
    } else if (filter.test(filePath)) {
      fileList.push(filePath)
    }
  })
  
  return fileList
}

function runUpdate(dictionary, allContentFiles) {
  dictionary.forEach(item => {
    const { current, update } = item
    
    allContentFiles.forEach((file, index) => {
      const contents = fs.readFileSync(file, { encoding: 'utf8' })
      const pattern = new RegExp(current, 'gm')
      if (pattern.test(contents)) {
        console.log(`\nIn file "${file}"`)
        console.log(`   found keyword "${current}"`)
        console.log(`   and replaced with keyword "${update}"`)
        const updatedContents = contents.replace(pattern, update)
        fs.writeFileSync(file, updatedContents)
      }
    })
  })
}

fs.readdir(PATH_TO_BLOG_CONTENT, { withFileTypes: true }, (err, files) => {
  const dirs = files.filter(dirent => dirent.isDirectory()).map(dirent => dirent.name)
  const allContentFiles = findInDir('./', /index\.md/)
  console.log(allContentFiles)
  const dictionary = dirs
  .filter(file => !/\.js|\.md/.test(file))
  .map(file => {
    return {
      update: `/${file}`,
      current: `https://www.nickang.com/${file.match(/[0-9]{4}-[0-9]{2}-[0-9]{2}-(.*)/)[1]}`
    }
  })
  
  console.log('\nMapping created:')
  console.log(dictionary)
  
  const readline = require('readline')
  const rl = readline.createInterface(process.stdin, process.stdout)
  rl.setPrompt('Sure you want to update files with those mappings? (yes/no)> ')
  rl.prompt()
  rl.on('line', function(line) {
    if (line === 'yes') {
      runUpdate(dictionary, allContentFiles)
      rl.close()
    }
    if (line === 'no') {
      rl.close()
    }
    rl.prompt()
  }).on('close',function(){
    process.exit(0)
  })
})
