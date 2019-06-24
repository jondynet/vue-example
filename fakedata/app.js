const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('hello nodejs'))

app.post('/api/auth/login', (req, res) => {
    console.log(req.body)
    if (req.body.username == 'admin' && req.body.password == '123') {
        res.send({code: 0, toke: 'this is a token'})
    } else {
        res.send({code: 1, message: '密码错误'})
    }
})

app.get('/api/dashboard/tabledata', (req, res) => {
    let data = [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎2',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    res.send(data)
})

app.listen(3000, () => console.log('listening on port 3000!'))
