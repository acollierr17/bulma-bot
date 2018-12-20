# HOME ROUTE - `/api/v1`

## GLOBAL ROUTES
```
/guilds  
/suggestions  
/suggestions/:sID  
/suggestions/approved  
/suggestions/rejected  
/commands  
/blacklists  
```
## GUILD SPECIFIC ROUTES
```
/guilds/:guildID  
/guilds/:guildID/suggestions  
/guilds/:guildID/suggestions/:sID  
/guilds/:guildID/suggestions/approved  
/guilds/:guildID/suggestions/rejected  
/guilds/:guildID/blacklists  
/guilds/:guildID/commands  
/guilds/:guildID/users/:userID  
/guilds/:guildID/users/:userID/suggestions  
/guilds/:guildID/users/:userID/suggestions/:sID  
/guilds/:guildID/users/:userID/suggestions/approved  
/guilds/:guildID/users/:userID/suggestions/rejected  
/guilds/:guildID/users/:userID/commands  
```
## BOT COMMANDS
```
/commands # exclude bot owner commands
/commands/:module
/commands/:command
/modules
/modules/:module
/modules/:module/:command
```

## USER SPECIFIC ROUTES - ADD GLOBAL STATS?
```
/users/:userID  
/users/:userID/suggestions  
/users/:userID/suggestions/:sID  
/users/:userID/suggestions/approved  
/users/:userID/suggestions/rejected  
/users/:userID/commands  
```
