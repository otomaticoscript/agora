//version clonica de JQUERY
const $ = (arg) => {
  // DOMContentLoaded
  if (typeof arg === 'function') {
    document.addEventListener('DOMContentLoaded', arg)
    return
  }

  // Selector de CSS
  let elements

  if (typeof arg === 'string') {
    elements = document.querySelectorAll(arg)
  }

  // Elemento HTML suelto
  if (arg instanceof HTMLElement) {
    elements = [arg]
  }

  elements.css = (...args) => {
    const [property, value] = args
    const isString = typeof property === 'string'
  
    elements.forEach(el => {
      if (isString) el.style[property] = value
      else {
        const entriesCSS = Object.entries(property)
        entriesCSS.forEach(([property, value]) => {
          el.style[property] = value
        })
      }
    })
    
    return elements
  }

  elements.on = (event, callback) => {
    elements.forEach(el => {
      el.addEventListener(event, callback)
    })
    return elements
  }

  elements.each = (fn) => {
    elements.forEach((el, index) => {
      fn(index, el)
    })
    return elements
  }

  elements.fadeIn = (duration = 1000) => {
    elements.forEach((el, index) => {
      const animation = el.animate([
        { opacity: 0 },
        { opacity: 1 }
      ], {
        duration
      })

      animation.onfinish = () => el.style.opacity = 1
    })
    return elements
  }

  return elements
}

// $(document).ready(fn) -> la forma larga
// $(fn) -> la forma corta

$(() => { // DOMContentLoaded
  console.log('DOMContentLoaded')

  $('button')
    .css('background', '#09f')
    .css('border', '#fff')
    .css({
      padding: '16px',
      borderRadius: '4px'
    })
    .on('click', () => {
      $('#mensaje').fadeIn()
    })


  $('li').each((index, el) => {
    console.log($(el))
    if (index === 0) $(el).css('color', '#09f')
    if (index === 1) $(el).css('color', 'red')
    if (index === 2) $(el).css('color', 'green')
  })
})
//Version clonica de REACT/SVELTE

/*
createElement(
    'h1',
    { className: 'greeting' },
    'Hello'
  );
}
*/
function createFragment(type, props, ...children){
    let el = document.createElement(type);
    const processChildren=()=>{
      children.forEach(child=>{
		  // el.append(child)
        if(typeof child == 'string'){
          //el.innerHTML+=child
		  el.insertAdjacentHTML('afterbegin',child)
        }else if (child instanceof HTMLElement) {
          el.appendChild(child)
        }
      })
    };
    const processProperties=()=>{
        const entriesDOM = Object.entries(props)
        entriesDOM.forEach(([property, value]) => {
			if(property === 'className'){
              value.split(/\.|\s/g).forEach(itemClass=>el.classList.add(itemClass))
			}else if(property === 'on'){
              const entriesOn = Object.entries(value)
              entriesOn.forEach(([event, fn]) => el.addEventListener(event,fn))
			}else if(property === 'css'){
              const entriesCss = Object.entries(value);
              let style = entriesCss.map(([prop, val]) => `${prop}:${val}`);
              el.style =style.join(';')
            }else{
              el[property] =  value
			}
        })
    };
	
    // Elemento Hijos HTML
    if(children){
      processChildren()
    }
	
	if(typeof props === 'object'){
      processProperties()
	}

  return el;
}
let name =	"Otavio";
let div =	createFragment('p',{},`Hola ${name}, `,createFragment("b",{},"¿Que tal?",' - <b color="red">Espero que bien</b>'));
document.body.append(div);
let thead = {
	"type":"thead",
	"children":[
		{
			"type":"tr",			
			"children":[
				{
					"type":"th",
					"children":["#"]
				},
				{
					"type":"th",
					"children":["Nombre"]
				},
				{
					"type":"th",
					"children":["<i>...</i>","Valor"]
				}
			]
		}
	]
};
let tbody ={
	"type":"tbody",
	"children":[
			{
			"type":"tr",
			"children":[
				{
					"type":"th",
					"children":["1"]
				},
				{
					"type":"td",
					"children":["Prueba"]
				},
				{
					"type":"td",
					"children":["value1","value2"]
				}
			]
		},
		{
			"type":"tr",
			"children":[
				{
					"type":"th",
					"children":["2"]
				},
				{
					"type":"td",
					"children":["Analisis"]
				},
				{
					"type":"td",
					"children":["step &uarr;"]
				}
			]
		},
		{
			"type":"tr",
			"children":[
				{
					"type":"th",
					"children":["3"]
				},
				{
					"type":"td",
					"props":{"colSpan":2,"css":{"color":"green", "background-color":"yellow"}},
					"children":["prueba larga"]
				},
			]
		}
	]
};
let table = {
	"type":"table",
	"props":{
		"className":"table",
		/*"border":1,*/
		"style":"color:red",
		"on":{
		"click":()=>alert("pulsed table")
		},
	},
	"children":[thead,tbody,'<caption>Grid de Prueba</caption>']
};

function build(info){
 let dom=null;
  if(info instanceof Array){
      dom =  info.map(item=>build(item));
  }
  else  if(typeof info === "string"){
      dom = info;
  }else{   
    let {type,props,children} = info;
    let elements = build(children);
    //debugger;
    dom = createFragment(type, props, ...elements);    
  }
  return dom;
}
let grid =  build(table)
document.body.append(grid);
