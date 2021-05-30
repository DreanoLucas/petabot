module.exports = {
  name: 'ban',
  description: 'ban',
  execute(message, args) {
    const taggedUser = message.mentions.users.first();
    message.channel.send(`Ah batard tu veux ban <@${taggedUser.id}>?`);

  },
}