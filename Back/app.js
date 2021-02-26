'use strict'

const app	= require("express")()
const cors	= require('cors')

const hostname	= '127.0.0.1'
const port		= 5000

app.use(cors())

app.use('/', [
	require('./routes/student-routes'),
	require('./routes/course-routes'),
	require('./routes/fee-routes'),
	require('./routes/invoice-routes'),
])

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
});

