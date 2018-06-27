require('babel-register')({
    presets:['react']
})

const express = require('express')
const app = express()

const React = require('react')
const ReactDOMServer = require('react-dom/server')

const Component = require('./component.jsx')

app.get('/',(req,res) => {
    var html = ReactDOMServer.renderToString(
        React.createElement(Component)
    )
    
    res.send(html)
})

app.listen(3000, () => {
    console.log('server on port 3000')
})
