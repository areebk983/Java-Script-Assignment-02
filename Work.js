// Q1 CODE

/*function addNumClosure(num) {
    function addNum(x) {
        return x + num;
    }
    return addNum;
}
const addFive = addNumClosure(5);
console.log(addFive(35)); 
console.log(addFive(29)); 

// Q2 CODE


function searchArray(arr, val) {
    if (arr.length === 0) {
        return false;
    } else if (arr[0] === val) {
        return true;
    } else {
        return searchArray(arr.slice(1), val);
    }
}

const arr = [1, 2, 3, 4, 5];
console.log(searchArray(arr, 3));
console.log(searchArray(arr, 5));
console.log(searchArray(arr, 6)); 

// Q3 CODE


function addParagraph(text) {
    const newPara = document.createElement("p");
    const textNode = document.createTextNode(text);
    newPara.appendChild(textNode);
    document.body.appendChild(newPara);
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("add-para-btn").addEventListener("click", function() {
        addParagraph("This is a new paragraph");
    });
});


// Q4 CODE

function addListItem() {
    const list = document.getElementById("my-list");
    const text = prompt("Enter the text for the new list item:");
    const newListItem = document.createElement("li");
    const textNode = document.createTextNode(text);
    newListItem.appendChild(textNode);
    list.appendChild(newListItem);
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("add-item-btn").addEventListener("click", function() {
        addListItem();
    });
});

// Q5 CODE

function changeBackgroundColor() {
    const element = document.getElementById("myDiv");
    const newColor = "Orange";
    element.style.backgroundColor = newColor;
} 

// Q6 and Q7 CODE


function saveToLocalStorage(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
}

function getFromLocalStorage(key) {
    const objString = localStorage.getItem(key);
    return JSON.parse(objString);
}
const myObj = { name: "Areeb", age: 20 };
saveToLocalStorage("myKey", myObj);
const retrievedObj = getFromLocalStorage("myKey");
console.log(retrievedObj); 

// Q8 CODE

function saveObjectToLocalStorage(obj) {
    // Save each property to localStorage
    Object.keys(obj).forEach(function(key) {
        localStorage.setItem(key, JSON.stringify(obj[key]));
    });

    // Retrieve each property from localStorage and add it to a new object
    const newObj = {};
    Object.keys(obj).forEach(function(key) {
        newObj[key] = JSON.parse(localStorage.getItem(key));
    });

    return newObj;
}

const myObj = { Name: "Hassan", Roll_number: 20 };
const newObj = saveObjectToLocalStorage(myObj);
console.log(newObj); */