
# DOCUMENTATION
---
This markdown file will contain all of the research and planning which will be conducted and gathered throughout the term.

# API RESEARCH
---
The following two API's are the best that I found within the categories that I was looking for.

## HEARTHSTONE API
[![Hearthstone](https://i.pinimg.com/originals/88/0f/9e/880f9efc82ccba3cea28d36adabecaa9.jpg)](https://hearthstoneapi.com/)

## The Hearthstone API pulls up to date information about the game. 

Below is some example data of what can be pulled from the API.*

```
[
    {
        "cardId": "EX1_116",
        "dbfId": "559",
        "name": "Leeroy Jenkins",
        "cardSet": "Hall of Fame",
        "type": "Minion",
        "faction": "Alliance",
        "rarity": "Legendary",
        "cost": 5,
        "attack": 6,
        "health": 2,
        "text": "<b>Charge</b>. <b>Battlecry:</b> Summon two 1/1 Whelps for your opponent.",
        "flavor": "At least he has Angry Chicken.",
        "artist": "Gabe from Penny Arcade",
        "collectible": true,
        "elite": true,
        "playerClass": "Neutral",
        "img": "http://media.services.zam.com/v1/media/byName/hs/cards/enus/EX1_116.png",
        "imgGold": "http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/EX1_116_premium.gif",
        "locale": "enUS",
        "mechanics": [
            {
                "name": "Charge"
            },
            {
                "name": "Battlecry"
            }
        ]
    }
]
```

> ^obtained from [Hearthstone API](https://hearthstoneapi.com/#data)
### Possible Comparisons and Visualisations

Certain topics which could be veiwed and compared in graphs could be:

 - Types of **Card Sets**
 - Levels of **Rarity**
 - **Faction** comparisons
 - Number of and which are **Elite** cards
 - Highest **Attack** stats
 - Population within certain **Races**
 - Population within certain **Classes**

The hearthstone API would provide a sure amount of data to display in graphs and tables, as well as to compare with each other.

---


# Dungeons and Dragons 5th Edition API
[![D&D](https://i.pinimg.com/originals/c7/c3/a0/c7c3a029d172b33287003d26a0c693f9.png)](http://www.dnd5eapi.co/docs/)

## This DND5E API provides all of the information regarding resources within the game of Dungeons and Dragons. 

*Below is some example data of what can be pulled from the API.*

| Resource | Entails |                              
| ----------- | ----------- |
| Character Data | Ability Scores, Skills, Profiencies, Languages |
| Classes | Class, Subclasses, Features, Spellcasting, Starting Equipment |
| Races | Races, Sub-Races, Traits |
| Equipment | Equipment categories, Weapons, Armor, Adventuring Gear, Weapon Properties |
| Spells | Range, Level, Casting Time, School (Conjuration etc.) |

> ^obtained from [D&D5E](dnd5eapi.co/docs/#resource-lists)

Each of the above mentioned attributes under the *Entails* heading contain sub-information which further details what the resources have to offer.
### Possible Comparisons and Visualisations

Certain topics which could be veiwed and compared in graphs could be:

 - Which spells fall under certain schools, compare the schools.
 - Weapon damage, highest and lowest.
 - Classes and their strengths/weaknesses
 - How many languages certain characters can speak

Even though the D&D API might provide a more challenging task to visualise data, it has more content to pull with equally as interesting content as the Hearthstone API.

---



