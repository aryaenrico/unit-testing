const {
  DB_USER = 'postgres',
  DB_PASSWORD = '9IroUCzT1ytGPFmeiQiy',
  DB_HOST = 'containers-us-west-100.railway.app',
  DB_NAME = 'unit-test',
  DB_PORT = '6905',
} = process.env;

module.exports = {
  development: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}_development`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres"
  },
  test: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}_test`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres"
  },
  production: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}_production`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "mysql"
  }
}
