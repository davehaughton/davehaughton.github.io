// set the main array globally
let theList = [];

// this creates the input fields to match the main array. it re-renders after every item is added/removed
function createInputList(){

    const container = document.getElementById('grocery_items');
    container.innerHTML = "";

    
    theList.forEach((item, index) => {
        container.insertAdjacentHTML('beforeend',
            '<div class="form-group">'+
                '<input type="text" value="'+item+'" oninput="updateListItem('+index+', this.value)">'+
                '<button class="remove_btn" onclick="removeListItem('+index+')">remove</button>'+
            '</div>'
        );
    });

}

// this adds an empty item into the array at the end
function addListItem() {
    theList.push(""); 
    createInputList(); 
}

// this updates the array item by targetting the index of the item in the array, this is called when the user adds data to the input field
function updateListItem(index, value) {
    theList[index] = value;
}

// this removes the item in the array, and re-renders the input list
function removeListItem(index) {
    theList.splice(index, 1); 
    createInputList(); 
}



// show the list based on the array data
function showGroceries(event){
    event.preventDefault();
    //console.log(theList);
    if(theList.length == 0){
        alert('you must have at least one item in your list');
        return;
    }
    
    const listWrap = document.getElementById('list_wrap');
    const theFinalList = document.getElementById('the_list');
    const groceryForm = document.getElementById('grocery_form'); 
    theFinalList.innerHTML = "";
    
    groceryForm.classList.add('hide');
    listWrap.classList.remove('hide');

    for(i=0;i< theList.length; i++){
       
        theFinalList.insertAdjacentHTML('beforeend',
        '<li>'+theList[i]+'</li>'
        );

    }
}

// reverts to the input list
function editList(event){
    event.preventDefault();

    const groceryForm = document.getElementById('grocery_form'); 
    const listWrap = document.getElementById('list_wrap');

    groceryForm.classList.remove('hide');
    listWrap.classList.add('hide');

}