import { Project } from "./createProject";
import { showProjects } from "./showProjects";
import { display } from "./displayProject";
// Handle button click to add new list 

const form = document.getElementById('addList');


function handleFormBtnClick() {
    console.log('out');
    form.addEventListener('submit', (event) => {
        event.preventDefault();     // prevent the form from submitting
        console.log('btn clicked');
        console.log("textContent = " + addProjectInput.value);
        if(addProjectInput.value != "") {
            const tmpProject = new Project(addProjectInput.value);
            addProjectInput.value = "";
            console.log("done successfully!");
            showProjects();
    
            const projectNodes = document.querySelectorAll('.project');
            console.log("# of .project elements = " + projectNodes.length);
            projectNodes.forEach(element => {
                console.log(element);
                element.addEventListener('click', function() {
                    console.log(this);
                    display(element);
                    // import { handleAddTaskBtn } from "./handleAddTaskBtn";
                    // handleAddTaskBtn();
                    const btn = document.getElementById('addTask');
                    const popup = document.getElementById('popup');
                    const all = document.getElementById('all');
                    handleAddTaskBtn();
                    function handleAddTaskBtn() {
                        console.log('in handle click add task btn');
                        btn.addEventListener('click', () => {
                            console.log('add task clicked');
                            popup.classList.add('active');   
                            all.classList.add('disable');
                        });
                    }
                    
                })
            });
    
        }
        
    });
    
}

export {handleFormBtnClick};