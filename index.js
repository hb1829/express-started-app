require("dotenv").config()
const express = require('express')
const app = express()
const port = process.env.PORT
const github_data = {
  "login": "hb1829",
  "id": 90382049,
  "node_id": "MDQ6VXNlcjkwMzgyMDQ5",
  "avatar_url": "https://avatars.githubusercontent.com/u/90382049?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/hb1829",
  "html_url": "https://github.com/hb1829",
  "followers_url": "https://api.github.com/users/hb1829/followers",
  "following_url": "https://api.github.com/users/hb1829/following{/other_user}",
  "gists_url": "https://api.github.com/users/hb1829/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/hb1829/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/hb1829/subscriptions",
  "organizations_url": "https://api.github.com/users/hb1829/orgs",
  "repos_url": "https://api.github.com/users/hb1829/repos",
  "events_url": "https://api.github.com/users/hb1829/events{/privacy}",
  "received_events_url": "https://api.github.com/users/hb1829/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Himanshu Banerjee",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 5,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2021-09-09T08:27:40Z",
  "updated_at": "2024-03-10T11:33:26Z"
}


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/instagram', (req,res)=>{
  res.send('himanshu.z1_')
})
 
app.get('/login', (req, res) => {
  res.send('<h1> Login route</h1>')
})

app.get('/youtube', (req,res) =>{
  res.send("<h2> Himanshu Banerjee </h2>")
})

app.get('/github',(req,res)=>{
res.json({github_data});
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})