# Battle Card Game

Project in JavaScript, SCSS, and jQuery for a team project during the third semester of my software development program.

## Card Game - Simplified Battle 
In this practical work, there is only one part to be done in a team of two, mandatory. You must work with DevOps GIT for source management. Your project will be assigned by your instructor. Here is the logic of the simplified battle card game:
- At the beginning, the 52 cards (without jokers) are shuffled and evenly distributed between the player and the computer (26 cards each).
- The player and the computer simultaneously turn a card until an equality is obtained (e.g., 6 of spades and 6 of hearts). Then the word "Battle!" is mentioned.
- The next turned card (the highest one) will determine who wins the battle. The suit does not matter, only the number of the card. Note that the ace is the highest card, and two is the lowest. If there is another tie, there is still a battle, and the next card will determine the winner of that battle.
- The winner takes all the turned cards (destination) from their opponent and places them under their deck (source) without shuffling them.
- If a player's deck (source) becomes empty, they must take the turned cards (destination), shuffle them, and put them back into the deck (source). Display a button.
- A game is won when the opponent has no more cards (empty source and destination) in their possession.

### Card Values:
High | Low
Source (div) | Source (div)
Destination (div) | Destination (div)

### JavaScript Class Modeling (mandatory):
A. Card Management Classes (cards.js):
   - Public (+)
   - Private (-)
Members of the classes must be declared as requested. You can add other members if necessary.

B. Player Class (player.js):
Members of the classes must be declared as requested. You can add other members if necessary.

C. Battle Class (battle.js):
Members of the classes must be declared as requested except for the suggested part. You can add other members if necessary.
Here, suggested members...
Note: Classes in JavaScript with private fields do not work with certain browsers (e.g., Internet Explorer), so display a message like the following instead of generating exceptions.

### To Note:
1. Add a project named TP1 on DevOps - GIT.
2. In Visual Studio, create a new ASP.Net (.NET framework) empty project. Push this initial version to DevOps - Git, in the master branch. Ensure that all developers can operate.
3. Retrieve the files provided with this statement and place them in your project.
4. Add a web page named index.html and include META tags.
5. Integrate Bootstrap 5 extension (latest version).
6. Add SCSS (SASS) files to contain your style definitions and to be compiled.
   - Here, I recommend programming all the cards in the game by making a class (style) for each card (e.g., Heart-2, Heart-3, etc.). By doing so, you can define the card's class on the corresponding DIV programmatically via jQuery.
7. Add the necessary JS files for the requested classes. Add a JS file that will declare a Battle object whose members will be called in events (e.g., ready, click).
8. Add comments according to standards.
9. Test with browsers: MS Edge Chromium, Chrome, and Firefox.
