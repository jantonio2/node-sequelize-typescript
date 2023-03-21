import dotenv from 'dotenv'
// Configure dot.env
// Dotenv config must to be before server import because the 
// environment variables are not loaded
dotenv.config()
import Server from './models/server'


const server = new Server()

server.listen()