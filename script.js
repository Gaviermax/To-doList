document.querySelector("#addTask").addEventListener("click", ()=>{
    if(document.querySelector("#inputTask").value != ""){
        document.querySelector("#taskList").innerHTML += `
        <div>
            <button class="btn btn-primary p-3 me-3 markButton"> </button>
            <span>${document.querySelector("#inputTask").value}</span>
            <button class="btn btn-danger ms-5 removeButton">Remove Task</button>
            <hr>
        </div>
        `
        document.querySelector("#inputTask").value = "";
        document.querySelector("#inputTask").clicked = true;
    }else{
        alert("please input Task")
    }

    const markButtons = document.querySelectorAll(".markButton");

    markButtons.forEach((markButton) =>{
        markButton.addEventListener("click", (event)=>{
            event.target.nextElementSibling.style = "text-decoration: line-through; color: grey"  
            event.target.style = "padding: 4px 9px !important"
            // event.target.remove();
            event.target.innerHTML = `✓`
        });
    })
    
    const removeButtons = document.querySelectorAll(".removeButton");

    removeButtons.forEach((removekButton) =>{
    removekButton.addEventListener("click", (event)=>{
        
        event.target.parentElement.remove();
        });
    });
});
    
    


