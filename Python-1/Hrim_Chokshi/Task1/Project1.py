# Create the pokemons and abilities
# get player names
#Start the battle

import random
from Model import pokemon_list
from Battle import attack

def game():
    print("POKEMON CARD BATTLE")
    player1_name = input("Enter player 1 name: ")
    player2_name = input("Enter player 2 name: ")
    p1 = random.choice(pokemon_list)
    p2 = random.choice(pokemon_list)
    while p2.name == p1.name:
        p2 = random.choice(pokemon_list)

    print(f"{player1_name} has {p1.name}")
    print(f"{player2_name} has {p2.name}") 

    while p1.is_alive() and p2.is_alive():
        print("Player 1 turn")
        attack(p1, p2)
        if not p2.is_alive():
            print(f"\n{p1.name} wins!")
            break
        print("Player 2 turn")
        attack(p2, p1)
        if not p1.is_alive():
            print(f"\n{p2.name} wins!")
            break

    print("\n Game Over!")

game()           




