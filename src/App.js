import './App.css';
import {
  Header,
  AddTaskForm,
  TaskList,
  FilterFooter,
  Footer
} from './components'

function App() {
  return (
    <div className="App">
      <Header />
      <AddTaskForm />
      <TaskList />
      <FilterFooter />
      <Footer />
    </div>
  );
}

export default App;
