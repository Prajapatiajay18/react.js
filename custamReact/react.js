const maincon = document.querySelector("#root")
const reactel ={
    type:'a',
    props: {
        href:'https://google.com',
        target:'_blank'
    },
    Children: 'click me'
}

function custem(reactel,maincon){
    const domElement = document.createElement(reactel.type)
    domElement.innerHTML = reactel.Children
    domElement.setAttribute('href',reactel.props.href)
    const Container=maincon
    Container.appendChild(domElement)
}





custem(reactel,maincon)