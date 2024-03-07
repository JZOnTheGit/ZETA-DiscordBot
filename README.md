
# Discord.js V14.2 Bot (ZETA)

This is a fully working bot made with D.Js v14 with slash commands and normal commands of over 50.



## Deployment

Install the required modules using the command

```bash
  npm i
```
in your console.


Fill all the fields in `Src/Credentials/Config.js`.

Use the command `node bot.js` or `node .` to start the bot 


# Important Notes
* [**NodeJS**](https://nodejs.org) V16 and above.
* `ContextMenus` and `SlashCommands` take 5 second each command file to create and update because of Discord's Ratelimit. But the `run()` function is updated immediately on startup so if you only need to update existing command code then it will be done instantly so thats a nice thing :D.
* Global commands can take upto a hour to update because that's how Discord made global commands so we cannot do anything about it.
* These are the collections where events and commands are stored.
```js
<Client>.messageCommands // Normal message commands collection.
<Client>.messageCommands_Aliases // Normal message commands aliases collection.
<Client>.events // Events collection.
<Client>.slashCommands // SlashCommands collection.
<Client>.contextMenus // ContextMenus collection.
<Client>.selectMenus // SelectMenus collection.
<Client>.buttonCommands // ButtonCommands collection.
<Client>.modalForms // ModalForms collection.
```
