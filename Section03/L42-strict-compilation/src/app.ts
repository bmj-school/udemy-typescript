const button = document.querySelector('button')!;

function clickHandler(message: string) {
   console.log('Clicked! ' + message)
}

button.addEventListener('click', clickHandler.bind(null, 'Hello...'))
// button.addEventListener('click', () => {
//     console.log('CLICKED')
// xx