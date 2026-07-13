#Randomly assign pokemon to both players
#Handle player turns
#Let player choose abilities
#Reduce hp aftereach attack
#Check if pokemon has fainted
#End the game and print the winner

def choose_ability(pokemon):
    while True:
        pokemon.show_abilities() 
        choice = int(input("Pick abitity 1-4: ")) - 1

        if choice >= 0 and choice < 4:
            if pokemon.uses[choice] > 0:
                pokemon.uses[choice] -= 1
                return choice
            else:
                print("No uses left! Pick another!")
        else:
            print("Invalid! Pick from 1-4.")


def attack(attacker, defender):
    select = choose_ability(attacker)
    ability_name = attacker.abilities[select]
    damage = attacker.damage[select]

    defender.hp -= damage
    if defender.hp < 0:
        defender.hp = 0

    print(f"\n {attacker.name} used {ability_name}")
    print(f"It did damage {damage}")
    print(f"{defender.name} HP: {defender.hp}")                      