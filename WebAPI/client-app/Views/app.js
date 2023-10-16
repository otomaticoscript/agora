//Base Framework
import * as $global from '/global.js';

window.addEventListener('DOMContentLoaded', () => {
    [
        './components/core/data-table.html',
        './components/core/json-values.html',
        './components/core/tree-list.html',
        './components/ui-menu.html',
        './components/dialog-master.html',
        './components/dialog-master-option.html',
        './components/dialog-template.html',
        './components/dialog-template-field.html',
        './components/dialog-template-children.html',
        './components/node-edit.html',
        './pages/configure/view-template.html',
        './pages/configure/view-master.html',
        './components/dialog-node-root.html',
        './pages/edit/view-node-root.html',
        './pages/edit/view-node.html'
    ].forEach((element) => {
        console.log(element);
        $global.loadComponent(element);    
    });
})

