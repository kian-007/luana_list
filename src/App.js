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
        $("#menue").css({'transition': 'visibility 500ms'});
        $("#menue").css({'visibility': 'visible'});
        $("#menue").animate({ opacity: '1', right: '0px' }, 500)
        $(this).css({ 'background-color': 'gray' });
        $("#menuButton p").animate({ rotate: '-90deg' })
      } else {
        $("#menue").animate({ opacity: '0.7', right: '-400px' }, 500)
        $("#menue").css({'visibility': 'hidden'})
        $(this).css({ 'background-color': 'white' });
        $("#menuButton p").animate({ rotate: '0deg' })
      }
    })

  }, [])


  


  return (
    <div className="App">
      <div id="menue">
        <Offcanvas updateSection={setSection} />
      </div>
      <Header />
      <TodoApp section={section} updateSection={setSection} />
      <Footer />
    </div>
  );
}

export default App;
