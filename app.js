// const http = require('http');

// const server = http.createServer((req, res) => {
//  if(req.url === '/') {
//   res.end('welcome to my home page')
//  }
//  if(req.url === '/about') {
//   res.end('Here is my information')
//  }
//  res.end(`
//   <h1>Finish here</h1>
//   <p>page does not appear</p>
//   <a href="/">Back Home</a>
//  `)
// })

// server.listen(3000)

const _ = require('lodash');
const items = [1,[2,[3,[4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);

