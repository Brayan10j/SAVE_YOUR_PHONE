const express = require('express')

// Create express instance
const app = express()

require('./database');
//MIDDLEWARES
app.use(express.json());
// Require API routes


// Import API Routes
app.use('/api',require('./routes/arreglos'));


// Export express app
module.exports = app

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
}
