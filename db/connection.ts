import { Sequelize } from 'sequelize'

const username: string = process.env.DB_USERNAME ?? 'root'
const password: string = process.env.PASSWORD ?? ''

const db = new Sequelize('node_users', username, password, {
  host: 'localhost',
  dialect: 'mysql',
  // logging: false,

  // This attribute allows to not create createAt and updateAt attributes on the database for each table
  define: {
    timestamps: false
  }
})

export default db