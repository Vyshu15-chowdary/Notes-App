
const noteForm = document.getElementById("note-form");
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const notesList = document.getElementById("notes-list");

//fetch and display notes

async function fetchNotes(){

    const res = await fetch(API_URL);

    const notes = await res.json();

    notesList.innerHTML="";

    notes.forEach((note)=>{
        const noteDiv = document.createElement("div");
        noteDiv.className = "note";

        noteDiv.innerHTML = `<h3>${note.title}</h3>
        <p>${note.content} </p>
        <button class="edit-btn" onclick="editNote('${note._id}', '${note.title}', '${note.content}')">Edit</button>
      <button class="delete-btn" onclick="deleteNote('${note._id}')">Delete</button> `;

      notesList.appendChild(noteDiv);

    });

}

// add note

noteForm.addEventListener("submit",async (e)=>{
    e.preventDefault();

    const title = titleInput.value.trim();
     const content = contentInput.value.trim();

     if(!title || !content)

        return;

        await fetch(API_URL,{
            method : "POST",
            headers : {"Content-Type":"application/json"},
            body : JSON.stringify({title,content}),
        });

        titleInput.value = "";
        contentInput.value ="";
        fetchNotes();
});

//edit note

async function editNote(id,oldTitle,oldContent){

    const newTitle = prompt("Edit title:",oldTitle);

    const newContent = prompt("Edit content:",oldContent);

    if(newTitle && newContent){
        await fetch(`${API_URL}/${id}`,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify({title:newTitle,content:newContent}),
        });

        fetchNotes();
    }
}

//delete note

async function deleteNote(id){
    if(confirm("Are you sure you want to delete this note?")){

        await fetch(`${API_URL}`,{method:"DELETE"});

        fetchNotes();
    }
}


//load notes initially
fetchNotes();