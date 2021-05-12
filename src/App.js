import TopPanel from "./components/TopPanel/TopPanel";
import NotesContainer from "./components/Notes/NotesContainer";
import AddMenuContainer from "./components/AddMenu/AddMenuContainer";

const App = () => {
  return (
    <div className="App">
      <TopPanel />
      <NotesContainer />
      <AddMenuContainer />
    </div>
  );
};

export default App;
