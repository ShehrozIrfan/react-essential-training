import Header from "./components/Header";
import Button from "./components/Button";
import Tasks from "./components/Tasks";
function App() {
  const handleClick = (e) => {
    console.log("Click", e);
  };

  return (
    <div className="container">
      <Header title="Task Tracker App" />
      <Button
        text="Add"
        classes="btn btn-primary btn-sm"
        onClick={handleClick}
      />
      <Tasks />
    </div>
  );
}

export default App;
