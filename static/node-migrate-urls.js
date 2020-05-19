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

fs.readdir('./', (err, files) => {
  const allContentFiles = findInDir('./', /index\.md/)
  const dictionary = files
    .filter(file => !/\.js|\.md/.test(file))
    .map(file => {
      return {
        update: `/${file}`,
        current: `https://nickang.com/${file.match(/[0-9]{4}-[0-9]{2}-[0-9]{2}-(.*)/)[1]}`
      }
    })

  dictionary.forEach(item => {
    const { current, update } = item

    allContentFiles.forEach((file, index) => {
      const contents = fs.readFileSync(file, { encoding: 'utf8' })
      const pattern = new RegExp(current, 'gm')
      if (pattern.test(contents)) {
        console.log(`\nIn file "${file}"`)
        console.log(`   found phrase "${current}"`)
        console.log(`   and replaced with phrase "${update}"`)
      }
      const updatedContents = contents.replace(pattern, update)
      fs.writeFileSync(file, updatedContents)
    })
  })
})
