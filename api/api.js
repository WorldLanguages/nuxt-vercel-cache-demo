const app = require('express')()

app.get('/:xyz', (req, res) => {
  res.set('Cache-Control', 'Cache-Control: s-maxage=9999')
  res.send(String(Math.random()))
})

export default app
