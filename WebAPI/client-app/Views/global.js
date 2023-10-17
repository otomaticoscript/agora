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