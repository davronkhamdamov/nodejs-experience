const chat_id = "836696307";
const bot_token = "1492122720:AAHZdu3yX5Ro4wav1CcyVEtac0zg9Zqo8n4";
const axios = require("axios");
const telegraf = require("telegraf");
const { join } = require("path");
const bot = new telegraf.Telegraf(bot_token);
const fs = require("fs");

const sendToTelegram = async (file_path) => {
  const data = JSON.parse(
    fs.readFileSync(join(__dirname, "data.json"), "utf-8"),
  );
  data.push({
    url: `https://api.telegram.org/file/bot1492122720:AAHZdu3yX5Ro4wav1CcyVEtac0zg9Zqo8n4/${file_path}`,
  });
  fs.writeFileSync(join(__dirname, "data.json"), JSON.stringify(data));
  await bot.telegram.sendMessage(
    "-1001876223048",
    `https://api.telegram.org/file/bot1492122720:AAHZdu3yX5Ro4wav1CcyVEtac0zg9Zqo8n4/${file_path}`,
  );
};

const sendImage = async (req, res) => {
  const file_path = join(__dirname, "../" + req.file.path);
  const data = await bot.telegram.sendPhoto(chat_id, {
    source: join(__dirname, "../" + req.file.path),
  });
  const response = await axios.get(
    `https://api.telegram.org/bot${bot_token}/getFile`,
    {
      params: { file_id: data.photo[2].file_id },
    },
  );
  await sendToTelegram(response.data.result.file_path);
  res.send("OK");
  fs.rmSync(file_path);
};

bot.launch().then();
module.exports = { sendImage };
