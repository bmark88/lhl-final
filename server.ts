require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const http = require("http")
const socketio = require("socket.io")

app.use(bodyParser.json())
app.use(cors())

const PORT = 3001

const server = http.createServer(app)
const io = socketio(server)

const { Pool } = require("pg")
const dbParams = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
}
const db = new Pool(dbParams)

const indexRoutes = require("./routes/index.ts")
const groupRoutes = require("./routes/group.ts")
const roomRoutes = require("./routes/room.ts")

app.use("/", indexRoutes(db))
app.use("/group", groupRoutes(db))
app.use("/room", roomRoutes(io))

const users = []
const rooms = []
io.on("connection", socket => {
  //user
  socket.on('join', ({ userName , roomId}) => {
   
    if (!users.includes(userName)) users.push(userName)
    socket.room_id = roomId 
    socket.join(socket.room_id)
    console.log(`joined room ${socket.room_id}`)
    io.to(socket.room_id).emit("displayUsers", { users })
  })

  socket.on("message", data => {
    console.log(data)
    io.to(data.roomId).emit("message", data)
  })

  socket.on('disconnect', () => {
    socket.leave(socket.room_id)
  })

})

server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
