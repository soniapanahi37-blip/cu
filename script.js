let display= document.getElementById("display") ;

let buttons= document.querySelectorAll("button") ;

buttons.forEach( function (button){
     button.addEventListener("click" , function()
     {
        let value= button.innerText ;

        if ( value=="C" ) {display.value= "0"}

        else if ( value=="⌫") {display.value=display.value.slice(0,-1) ;
            if (display.value=="") { display.value="0"}
        }
        
        else if (value=="=") {display.value=eval(display.value); }

        else { if(display.value=="0"){display.value=value }
               
               else { display.value+= value ;}
    }

       
     }

    ) ;

}
 ) ; 
