const menuMaker = ({itemContainer, items = [], itemClass, multiline = true, containerType = 'inline'}) => {
    let currentView = 'none';
    itemContainer.style.display = currentView;
    
    const toggleView = () => {
        if (currentView === 'none'){
            currentView = containerType;
        } else currentView = 'none';

        itemContainer.style.display = currentView;
    }

    const show = () => {
        currentView = containerType;
        itemContainer.style.display = currentView;
    }

    const hide = () => {
        currentView = 'none';
        itemContainer.style.display = currentView;
    }


    const css = `
    .menumakerresetA, .menumakerresetA:hover, .menumakerresetA:visited, .menumakerresetA:focus, .menumakerresetA:active  {
        text-decoration: none;
        color: inherit;
        cursor: auto;
    }
    `;
    const style = document.createElement('style');
    style.appendChild(document.createTextNode(css));
    document.querySelector('head').appendChild(style);

    for(let i = 0; i < items.length; i += 1){
        if(multiline && i > 0){
            itemContainer.appendChild(document.createElement('br'));
        }
        const item = items[i];

        const itemEl = document.createElement('a');
        itemEl.innerText = item.text || '';
        
        if(item.href === undefined){
            itemEl.classList.add('menumakerresetA');
        } else {
            itemEl.href = item.href;
        }

        itemEl.onclick = item.onclick;

        itemEl.target = item.target || '';

        if(itemClass !== undefined) itemEl.classList.add(itemClass);

        itemContainer.appendChild(itemEl);
    }

    return {show, hide, toggleView};
}

export default menuMaker;