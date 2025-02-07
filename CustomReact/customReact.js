// function customRender(reactElement,container){
//     const domElement=document.createElement(reactElement.type)
//     domElement.innerHTML=reactElement.children
//     //causing problem for multiple conditions
//     domElement.setAttribute('href',reactElement.props.href)
//     domElement.setAttribute('target',reactElement.props.target)

//     container.appendChild(domElement)
// }

function customRender(reactElement,container){
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    //react element
   for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
   }
   //storing data
   container.appendChild(domElement)
}

const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'click to visit google'
}

const mainContiner=document.querySelector('#root')

customRender(reactElement,mainContiner)
