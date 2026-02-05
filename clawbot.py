import telebot

TOKEN = "8408724670:AAGmBnaPBh3te-D5i2tMDS3oQEssQ0MHbqU"
bot = telebot.TeleBot(TOKEN)

@bot.message_handler(commands=['start'])
def start(message):
    bot.reply_to(message, "Salut ! Je suis ton ClawBot 😎")

@bot.message_handler(func=lambda message: True)
def echo_all(message):
    bot.reply_to(message, f"Tu as dit : {message.text}")

bot.infinity_polling()
