
const app = require('./src/app.js');
const {sequelize} = require('./src/db')
require('dotenv').config()
const port = process.env.PORT || 4000;


// swagger

  



try {
    sequelize.authenticate()
    sequelize.sync({force:false})
    console.log('Conected to db');
} catch (error) {
    throw new Error(error)
}


app.listen(port, () => {
    console.log(`Server is running. http://localhost:${port}`)
})