module.exports = {
    details: [
        {
            name: "help",
            description: "List available commands"
   },
        {
            name: "list",
            description: "List players/bots"


   },
        {
            name: "kill",
            description: "Kills a player",
            options: [{
                name: "pID",
                description: "Player id to kill"
                }]

   },
        {
            name: "xp",
            description: "Gives/takes/sets xp",
            options: [
                {
                    name: "action",
                    options: ["give", "take", "set"]
                },
                {
                    name: "pID",
                    description: "Player id"
                },
                {
                    name: "amount"
                }
            ]
        },
        {
            name: "setTank",
            description: "Sets the tank of a player",
            options: [{
                    name: "pID",
                    description: "Player ID"
            },
                {
                    name: "Tank",
                    options: ["tank", "twin", "sniper", "machine_gun", "flank_guard", "triple_shot", "quad_tank", "twin_flank", "assassin", "overseer", "hunter", "trapper", "destroyer", "gunner", "tri-angle", "quad_tank", "twin_flank", "auto_3", "smasher", "triple_twin", "battleship", "octo_tank", "auto_5", "triplet", "penta_shot", "spread_shot", "overlord", "necromancer", "manager", "overtrapper", "battleship", "factory", "ranger", "stalker", "booster", "fighter", "hybird", "annihilator", "skimmer", "predator", "streamliner", "tri-trapper", "gunner_trapper", "overtrapper", "mega_trapper", "auto_trapper", "landmine", "auto_smasher", "spike", "sprayer", "auto_gunner", "gunner_trapper", "streamliner", "auto_5", "auto_gunner", "arena_closer", "mothership", "dominator1", "dominator2", "dominator3", "developer"]
                     }]
        }
 ]

}