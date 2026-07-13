# Stores player name and assigned pokemons
#Stores pokemon name, HP, defence and it's abilities
#Stores the ability name, damage and remaining uses


class Pokemon:
    def __init__(self, name, hp, abilities, damage, uses):
        self.name = name
        self.hp = hp
        self.abilities = abilities
        self.damage = damage
        self.uses = uses

    def is_alive(self):
        return self.hp > 0

    def show_abilities(self):
        print(f"The name of the pokemon is {self.name} \n hp: {self.hp} \n")
        for i in range(4):
            print(f"Abilities: {i+1}.{self.abilities[i]} \n | , Damage:{self.damage[i]}\n, | Uses:{self.uses[i]}")

pokemon_list = [
    Pokemon("Pikachu", 100, ["Thunderbolt", "Quick Attack", "Iron Tail", "Electro Ball"], [90, 40, 100, 80], [5, 5, 5, 5]),
    Pokemon("Charizard", 100, ["Flamethrower", "Dragon Claw", "Air Slash", "Fire Blast"], [90, 80, 75, 110], [5, 5, 5, 5]),
    Pokemon("Lucario", 100, ["Aura Sphere", "Close Combat", "Bone-Rush", "Metal Claw"], [80, 120, 60, 50], [5, 5, 5, 5]),
    Pokemon("Blastoise", 100, ["Hydro Pump", "Ice-Beam", "Flash Cannon", "Aqua Tail"], [110, 90, 80, 90], [5, 5, 5, 5]),
    Pokemon("Greninja", 100, ["Water Shuriken", "Dark Pulse", "Ice-Beam", "Aerial Ace"], [45, 80, 90, 60], [5, 5, 5, 5]),
    Pokemon("Mewtwo", 100, ["Psychic", "Shadow Ball", "Aura Sphere", "Ice-Beam"], [90, 80, 80, 90], [5, 5, 5, 5]),
    Pokemon("Sylveon", 100, ["Moonblast", "Hyper Voice", "Shadow Ball", "Calm Mind"], [95, 90, 80, 0], [5, 5, 5, 5]),
    Pokemon("Zoroark", 100, ["Night Daze", "Focus Blast", "Flamethrower", "Sludge Bomb"], [85, 120, 90, 90], [5, 5, 5, 5]),
    Pokemon("Corviknight", 100, ["Brave Bird", "Iron-head", "Roost", "Defog"], [120, 80, 0, 0], [5, 5, 5, 5]),
    Pokemon("Mimikyu", 100, ["Play Rough", "Shadow Claw", "Swords Dance", "Drain Punch"], [90, 70, 0, 75], [5, 5, 5, 5])
]
