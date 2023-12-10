let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));//Array.from() static method creates a new,shallow-copied array instance from an iterable or array like object.

buttons.map( button => {                        //Map holds the key-value pairs where the keys can be any datatype.
    button.addEventListener('click', (e) => {   //add event listner method is used to attach an event handler to particular element.
        switch(e.target.innerText){             //innerText property set or returns the text contentof element.
            case 'C':
                display.innerText = '';
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);//eval function is use to evaluate string expression in javascript.
                } catch {
                    display.innerText = "Error"
                }
                break;
            case '←':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);//slice() extracts the text from string.  
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});