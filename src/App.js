import './App.css';
import react, { useEffect } from 'react';
import {
  Header,
  AddTaskForm,
  TaskList,
  FilterFooter,
  Footer,
  TodoApp
} from './components'
import $ from 'jquery';


function App() {

  useEffect(() => {
    $("#menuButton").on('click', function () {
      $("#menue").toggleClass('active');
      if($("#menue").hasClass('active')) {
        $("#menue").animate({opacity: '1', right: '0px'}, 500)
        $(this).css({ 'background-color': 'gray'});
        $("#menuButton p").animate({rotate: '-90deg'})
      }else{
        $("#menue").animate({opacity: '0.7', right: '-400px'}, 500)
        $(this).css({ 'background-color': 'white'});
        $("#menuButton p").animate({rotate: '0deg'})
      }
    })
    

    
  },[])

  return (
    <div className="App">
      <div id="menue"></div>
      <Header />
      <TodoApp />
      <Footer />
    </div>
  );
}

export default App;
