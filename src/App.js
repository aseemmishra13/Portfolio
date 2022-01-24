import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Greetings from "./components/Greetings";
import Protfolio from "./components/Protfolio";


function App() {

    let themeDots = document.getElementsByClassName('theme-dot')
    let mode = localStorage.getItem('theme')?localStorage.getItem('theme'):''
   
	useEffect(()=>{console.log('its working');
    if (mode){
        setTheme(mode)
    }

    console.log(themeDots);
    for (var i=0; themeDots.length > i; i++){
        themeDots[i].addEventListener('click', function(){
            mode = this.dataset.mode
            console.log('Option clicked:', mode)
            setTheme(mode)
        })
    }
    
    function setTheme(mode){
        if(mode == 'light'){
            document.getElementById('theme-style').href = 'default.css'
        }
    
        if(mode == 'blue'){
            document.getElementById('theme-style').href = 'blue.css'
        }
    
        if(mode == 'green'){
            document.getElementById('theme-style').href = 'green.css'
        }
    
        if(mode == 'purple'){
            document.getElementById('theme-style').href = 'purple.css'
        }
    
        localStorage.setItem('theme', mode)
    }
   },[themeDots,mode])
	
return (<div>

	<Greetings/>
	<About/>
	<Protfolio/>
	<Contact/>
</div>
	
	
	)
}

export default App;
