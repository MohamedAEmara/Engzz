import { display } from "./displayProject";
import { showProjects } from "./showProjects";
import { showRelatedTasks } from "./showRelatedTasks";


function projectClickListener() {
    const projectNodes = document.querySelectorAll('.project');
    
    for(let i of projectNodes) {
        i.addEventListener('click', function() {
            console.log(this);
            // showRelatedTasks(this.textContent);
            // showProjects(this);
            display(this);
        });
    }

}

export {projectClickListener};
// projectNode.addEventListener('click', () => {
//     console.log('clickeddddddddd');
// })
