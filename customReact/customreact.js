function customRender(reactElement, container) {
    /*
    const domElement = document.createElement(reactElement.type);
    domElement.href = reactElement.props.href;
    domElement.target = reactElement.props.target;
    domElement.innerHTML = reactElement.children;
    container.append(domElement);
    */
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        if(prop === 'children') {
            continue;
        }
        domElement[prop] = reactElement.props[prop];
    }
    container.append(domElement);

}

const reactElement = {
    type: 'a',
    props: {
      href: 'https://www.google.com',
      target: '_blank',
    },
    children: 'Click me',
}
    

const mainconatiner = document.querySelector('#root')

customRender(reactElement, mainconatiner)

