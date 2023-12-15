// Load items from local storage on page load
document.addEventListener('DOMContentLoaded', function() {
    //loadtasks from local storage;
    loadtasks()
});

document.getElementById('one').style.color="red";

function addTask(){
   var inputvalue =document.getElementById('inputtask').value;

   if (inputvalue==""){
    alert("Please enter a task");
    return;
   }
   //create a new list item element
   var li=document.createElement("li");
   //set the text content of the list item to the value  from the input
   li.textContent=inputvalue;

   //append the list item to our existing list
   var mylist=document.getElementById('mylist');
   mylist.appendChild(li);

   //create  a delete button for  each list item
   var deletebtn=document.createElement("button");
   deletebtn.textContent="Delete";
   deletebtn.classList.add('deletebutton');
    //removes the list item onclick delete key
   deletebtn.onclick=function(){
    mylist.removeChild(li);
   }

   // Toggle task completion on click
   li.addEventListener("click", function() {
    this.classList.toggle("completed");
            });
   //append the delete button to our listitem
   li.appendChild(deletebtn);
   //clear the input filed
    inputtask.value="";




}