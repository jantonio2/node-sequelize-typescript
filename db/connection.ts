import { Sequelize } from 'sequelize'

const username: string = process.env.DB_USERNAME ?? 'root'
const password: string = process.env.PASSWORD ?? ''

const db = new Sequelize('node_users', username, password, {
  host: 'localhost',
  dialect: 'mysql',
  // logging: false
})

export default db