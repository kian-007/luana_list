import './App.css';
import {
  Header,
  AddTaskForm,
  TaskList,
  FilterFooter,
  Footer,
  TodoApp
} from './components'

function App() {
  return (
    <div className="App">
      <Header />
      <TodoApp />
      <Footer />
    </div>
  );
}

export default App;
