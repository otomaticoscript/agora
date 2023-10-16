export function loadComponent(file) {
  return new Promise((resolve, reject) => {
    fetch(file)
      .then(result => {
        return result.text();
      })
      .then(txt => {
        const parser = new DOMParser();
        const fragment = parser.parseFromString(txt, 'text/html');
        const originalTemplate = fragment.getElementsByTagName('TEMPLATE')[0];
        let template;
        if (originalTemplate) {
          template = document.createElement('template');
          template.innerHTML = originalTemplate.innerHTML;
          template.id = originalTemplate.id;
          document.body.appendChild(template);
        }
        const originalScript = fragment.getElementsByTagName('SCRIPT')[0];
        let script;
        if (originalScript) {
          script = document.createElement('script');
          script.innerHTML = originalScript.innerHTML;
          script.type = originalScript.type || 'text/javascript';
          document.body.appendChild(script);
        }
        resolve({ template, script });
      })
      .catch(reject);
  });
}
export function viewInMain({ componentName, main = '#divMain' }) {
  let divMain = {};
  if (typeof main == 'string') {
    divMain = document.querySelector(main);
  }
  if (main instanceof HTMLElement) {
    divMain = main;
  }

  if (divMain instanceof HTMLElement && componentName) {
    const component = document.createElement(componentName);
    divMain.appendChild(component);
  } else {
    throw new Error("No se pudo cargar el component");
  }
}

Object.prototype.replaceEntries=(sourceText,O) =>{
  let entriesReplace = Object.entries(O)
  entriesReplace.forEach((item) => {
    const [property, value] = item
    sourceText = sourceText.replaceAll(`\${${property}}`, value || '')
  })
  return sourceText
}
/*
export function searchAndReplace(component, sourceText, replaceText = []) {
    replaceText.forEach((text) => {
      sourceText = sourceText.replace(
        `{{${text}}}`,
        component.getAttribute(text) || ''
      )
    })
  return sourceText
}


export function camelToSnakeCase(str) {
  str = str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)
  return str[0] === '-' ? str.slice(1) : str
}

export function fillTemplate(templateString, templateVars) {
  return new Function('return `' + templateString + '`;').call(templateVars)
}

export function CreateGuid() {
  const _p8 = (s) => {
    var p = (Math.random().toString(16) + '000000000').substr(2, 8)
    return s ? '-' + p.substr(0, 4) + '-' + p.substr(4, 4) : p
  }
  return _p8() + _p8(true) + _p8(true) + _p8()
}

export function createElement(type, props, ...children) {
  let tag = document.createElement(type);

  if (props) {
      let iterator = Object.entries(props);
      iterator.forEach(([prop, value]) => {
          switch (prop) {
              case "className":
                  tag.classList.add(value);
                  break;
              default:
                  tag.setAttribute(prop, value);
          }
      });
  }
  //debugger
  if (children) {
      children.forEach(el =>  tag.append(el));
  }
  return tag;
}
*/