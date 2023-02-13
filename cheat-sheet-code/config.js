{
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.PORT,
    dialect: postgres, 
    dialectOptions: { 
      ssl: { 
        rejectUnauthorized: false
      } 
    } 
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.PORT,
    dialect: postgres, 
    dialectOptions: { 
      ssl: { 
        rejectUnauthorized: false 
      } 
    } 
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.PORT,
    dialect: postgres, 
    dialectOptions: { 
      ssl: { 
        require: true, 
        rejectUnauthorized: false
      } 
    } 
  }
}


