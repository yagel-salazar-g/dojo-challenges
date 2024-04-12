import random

def prisoner_dilemma(player1, player2):
    outcomes = {
        ('Cooperate', 'Cooperate'): ('Reward', 'Reward'),
        ('Cooperate', 'Betray'): ('Sucker', 'Temptation'),
        ('Betray', 'Cooperate'): ('Temptation', 'Sucker'),
        ('Betray', 'Betray'): ('Punishment', 'Punishment')
    }

    outcome_player1, outcome_player2 = outcomes[(player1, player2)]
    return outcome_player1, outcome_player2

# Simulation
num_iterations = 1000
player1_strategy = 'Cooperate'
player2_strategy = 'Betray'

for _ in range(num_iterations):
    player1_strategy = random.choice(['Cooperate', 'Betray'])
    player2_strategy = random.choice(['Cooperate', 'Betray'])

    outcome_player1, outcome_player2 = prisoner_dilemma(player1_strategy, player2_strategy)
