

const projectNodes = document.querySelectorAll('.project');

for(i of projectNodes) {
    i.addEventListener('click', function() {
        console.log(this);
    });
}

export {projectNodes};
// projectNode.addEventListener('click', () => {
//     console.log('clickeddddddddd');
// })
