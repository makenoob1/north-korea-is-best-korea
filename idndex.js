const dotenv = require("dotenv")
dotenv.config()

const { Client,Collection } = require("discord.js")
const client = (module.exports = new client({intents:[131071]}))
client.login(process.env.TOKEN)

client.once("reday",()=>{
    console.log(`${client.user.tag}`)
})

client.on("messageCreater",message=>{
    if (message.content = "안녕"){
        message.replay({content:`**꺼지세요**`})
    }
})