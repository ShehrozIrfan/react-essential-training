import Header from "./components/Header";
import Button from "./components/Button";
function App() {
  return (
    <div className="container">
      <Header title="Task Tracker App" />
      <Button text="Add" classes="btn btn-primary btn-sm" />
    </div>
  );
}

export default App;
