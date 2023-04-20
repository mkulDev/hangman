const context = {
    keys:[
        {id: 'KeyQ',
        name: 'Q'    
        },
        {id: 'KeyW',
        name: 'W'    
        },
        {id: 'KeyE',
        name: 'E'    
        },
        {id: 'KeyR',
        name: 'R'    
        },
        {id: 'KeyT',
        name: 'T'    
        },
        {id: 'KeyY',
        name: 'Y'    
        },
        {id: 'KeyU',
        name: 'U'    
        },
        {id: 'KeyI',
        name: 'I'    
        },
        {id: 'KeyO',
        name: 'O'    
        },
        {id: 'KeyP',
        name: 'P',
        br: true   
        },
        {id: 'KeyA',
        name: 'A'    
        },
        {id: 'KeyS',
        name: 'S'    
        },
        {id: 'KeyD',
        name: 'D'    
        },
        {id: 'KeyF',
        name: 'F'    
        },
        {id: 'KeyG',
        name: 'G'    
        },
        {id: 'KeyH',
        name: 'H'    
        },
        {id: 'KeyJ',
        name: 'J'    
        },
        {id: 'KeyK',
        name: 'K'    
        },
        {id: 'KeyL',
        name: 'L',
        br: true       
        },
        {id: 'KeyZ',
        name: 'Z'    
        },
        {id: 'KeyX',
        name: 'X'    
        },
        {id: 'KeyC',
        name: 'C'    
        },
        {id: 'KeyV',
        name: 'V'    
        },
        {id: 'KeyB',
        name: 'B'    
        },
        {id: 'KeyN',
        name: 'N'    
        },
        {id: 'KeyM',
        name: 'M'    
        },
    ]
};

const templateElement = document.getElementById('templateKey');
const templateSource = templateElement.innerHTML; 
const template = Handlebars.compile(templateSource);
const compiledHtml = template(context);
document.getElementById('keyboard').innerHTML = compiledHtml;

document.addEventListener('keypress' ,function(event){
let key = document.getElementById(event.code);
if(key.style.backgroundColor !== 'rgba(0, 0, 0, 0.5)'){
    console.log('i was hit')
    key.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
} else {
    key.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
}


})