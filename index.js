const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const clickable = (function(){
  const clientId = "8b481a61d339178f7747d3b876c5b3a07f9b066d41c5147f02829c9397a507fc"
  return (
    "<script>" +
    "let currUri = encodeURIComponent(document.location.href);" + 
    "document.getElementById(\"cl\").setAttribute(\"href\", \"https://www.coinbase.com/oauth/authorize?response_type=code&client_id=8b481a61d339178f7747d3b876c5b3a07f9b066d41c5147f02829c9397a507fc&redirect_uri=\"+ currUri +\"&state=SECURE_RANDOM_STUFF&scope=wallet:accounts:read\")" + 
    "</script>"
  )
})();

app.get('/', (req, res) => {
  console.log(clickable)
  res.send('Coinbase-auth <a id="cl">Click here</a>' + clickable)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})