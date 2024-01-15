import Player from "./components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name={"as"} symbol={"x"} />
          <Player name={"as dsc "} symbol={"o"} />
        </ol>
      </div>
    </main>
  );
}

export default App;
