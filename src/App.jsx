import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName={"as"} symbol={"x"} />
          <Player initialName={"as dsc "} symbol={"o"} />
        </ol>
        <GameBoard />
      </div>
    </main>
  );
}

export default App;
