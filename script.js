let addBtn=document.getElementById("addBtn");
addBtn.addEventListener("click",function(e)
{
    let addTxt=document.getElementById("addTxt");
    let notes=localStorage.getItem("notes");
    if(notes == null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    (addTxt.value.length>4)? notesObj.push(addTxt.value):alert("Enter longer text");
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addTxt.value ="";
    console.log(notesObj);
    showNotes();
})
function showNotes(){
    let notes = localStorage.getItem("notes");
    let notesObj;
    if(notes ==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    let html="";
    notesObj.forEach(function(element,index) {
        html +=`
        <div class="notecard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">Note ${index+1}</h5>
        <p class="card-text">${element}</p>
        <button id="${index}" onclick="Deletenote(this.id) "class="btn btn-primary">Delete Note</button>
        </div>
        </div>`;
    });
    let notesEln =document.getElementById("notes");
    if(notesObj.length != 0){
        notesEln.innerHTML = html; 
    }
    else {
        notesEln.innerHTML=`Nothing to show! use "add a note "section above add notes. `;
    }
} 

function Deletenote(index){
    console.log("im deleting");
    let notes = localStorage.getItem("notes");
    if(notes ==null){
        notesObj=[];
    } 
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes();
}

let search= document.getElementById('searchTxt');
search.addEventListener("input",function(){
    
    let inputval = search.value.toLowerCase();
    let notecards = document.getElementsByClassName('notecard');
    Array.from(notecards).forEach(function(element){
        let cardTxt=element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputval)){
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }
    })
})


showNotes();