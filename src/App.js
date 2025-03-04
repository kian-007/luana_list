import './App.css';
import react, { useEffect, useState } from 'react';
import {
  Header,
  AddTaskForm,
  TaskList,
  FilterFooter,
  Footer,
  TodoApp,
  Offcanvas
} from './components'
import $ from 'jquery';


function App() {
  const [section, setSection] = useState("all");

  useEffect(() => {
    $("#menuButton").on('click', function () {
      $("#menue").toggleClass('active');
      if ($("#menue").hasClass('active')) {
        // $("#menue").css({'transition-duration': '1s'});
        $("#menue").css({'display': 'block'});
        $("#menue").animate({ opacity: '1', right: '0px' }, 500)
        $(this).css({ 'background-color': 'gray' });
        $("#menuButton p").animate({ rotate: '-90deg' })
      } else {
        // $("#menue").css({'transition-duration': '2s'});
        $("#menue").animate({ opacity: '0.7', right: '-400px' }, 550)
        $("#menue").css({'display': 'hide'})
        $(this).css({ 'background-color': 'white' });
        $("#menuButton p").animate({ rotate: '0deg' })
      }
    })

  }, [])


  useEffect(() => {
    console.log("Current Section is : ", section);
  })


  return (
    <div className="App">
      <div id="menue">
        <Offcanvas updateSection={setSection} />
      </div>
      <Header />
      <TodoApp />
      <Footer />
    </div>
  );
}

export default App;
