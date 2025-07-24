// Team object representing a sports team with players and game history
const team = {
  // Array to store player objects
  _players: [
    { firstName: "Richard", lastName: "Lee", age: 38 },
    { firstName: "Dave", lastName: "Smith", age: 38 },
    { firstName: "Ian", lastName: "Henderson", age: 38 },
  ],

  // Array to store game objects
  _games: [],

  // Getter to access the _players array
  get players() {
    return this._players;
  },

  // Getter to access the _games array
  get games() {
    return this._games;
  },

  // Method to add a new player to the team
  addPlayer(newFirstName, newLastName, newAge) {
    const player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    this._players.push(player); // Add the new player to the _players array
  },

  // Method to add a new game to the game history
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    const game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };
    this._games.push(game); // Add the new game to the _games array
  },

  // Method to print all recorded game results
  printGameResults() {
    if (this._games.length === 0) {
      // Handle case where there are no games yet
      console.log("No games have been recorded yet.");
      return;
    }

    // Loop through each game and print formatted result
    this._games.forEach((game) => {
      console.log(
        `vs ${game.opponent} — We scored ${game.teamPoints}, they scored ${game.opponentPoints}`
      );
    });
  },

  // Method to print all players on the team
  printPlayers() {
    if (this._players.length === 0) {
      // Handle case where there are no players
      console.log("No players on the team yet.");
      return;
    }

    // Loop through each player and print formatted info
    this._players.forEach((player) => {
      console.log(`${player.firstName} ${player.lastName}, Age: ${player.age}`);
    });
  },
};

// ✅ Add some games to the history
team.addGame("Titans", 100, 98);
team.addGame("Sharks", 77, 65);
team.addGame("Dragons", 80, 85);

// ✅ Print game results and team roster
team.printGameResults();
team.printPlayers();
