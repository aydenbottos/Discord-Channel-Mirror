import express from "express"

const app = express();

app.get("/", (req,res) => {
  res.send("Bot is online");
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("listening to port 5000"));


import selfcore from "selfcore";

let token = "T0RjMk1EYzVOemcxTnpZMk5ETTJPVEEwLllZbVdHZy4zSXlROWF1LUc2OEhDc3VNVVFWRWZnZlJscFE=";

const buff = Buffer.from(token, 'base64');

const str1 = buff.toString('utf-8');

const client = new selfcore();
const gateway = new selfcore.Gateway(str1);

gateway.on("message", (m) => {
  if (m.channel_id === "875264186127626250") {
    let content = m.content ? m.content : { embeds: [m.embeds[0]] };
    
    let url = "aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvOTA3NDExOTY4NjI3OTc4MzExLy01UEtQRnNuMEs4V3VhTUlxck1vbnB6WkhhT3NWNXhGeVN4N2FjYlZZNjVXXzI1WFhYMFpPMjlYXzRnclhYalQtRENG";
    
    const buff1 = Buffer.from(url, 'base64');
    
    const str2 = buff1.toString('utf-8');

    client.sendWebhook(
      str2,
      content
    );
  }
});
