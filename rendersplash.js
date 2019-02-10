const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })
const  fileUrl = require('file-url')

const clip = {
  x:0,y:0,width:960,height:540
}



nightmare
  .viewport(clip.width+30,clip.height+30)
  .goto(fileUrl('./index.html'))
  .screenshot('./xxx.png',clip)
  .end()
  .then(console.log)
  .catch(error => {
    console.error('Search failed:', error)
  })
