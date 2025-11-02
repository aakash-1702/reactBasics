function customRender(element, mainContainer){
    const domElement = document.createElement(element.type);
    domElement.innerHTML = element.children;
    for (const attribute in element.Attributes) {
        if(attribute === 'children') continue;
        
        domElement.setAttribute(attribute,element.Attributes[attribute]);       
        
    }

    mainContainer.appendChild(domElement);
}
const element = {
    type : 'a',
    Attributes : {
        href : 'https://google.com',
        target : "_blank"
    },
    children : 'Click this to go to google'
};

const mainContainer = document.getElementById("root");
customRender(element,mainContainer);