import Player from "./components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName={"as"} symbol={"x"} />
          <Player initialName={"as dsc "} symbol={"o"} />
        </ol>
      </div>
    </main>
  );
}

export default App;
