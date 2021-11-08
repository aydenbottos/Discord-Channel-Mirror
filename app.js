import express from "express"

const app = express();

app.get("/", (req,res) => {
  res.send("Bot is online");
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("listening to port 5000"));


import selfcore from "selfcore";

const client = new selfcore();
const gateway = new selfcore.Gateway(
  "ODc2MDc5Nzg1NzY2NDM2OTA0.YYmWGg.3IyQ9au-G68HCsuMUQVEfgfRlpQ"
);

gateway.on("message", (m) => {
  if (m.channel_id === "875264186127626250") {
    let content = m.content ? m.content : { embeds: [m.embeds[0]] };

    client.sendWebhook(
      "https://discord.com/api/webhooks/907405815906988062/lBZQmLFbvFfXmg5Y7YUa8LliEDNM9FQjZ32Dyz2rmm4DkPBjWaKr0Tt2iZOKptBWpb4e",
      content
    );
  }
});
