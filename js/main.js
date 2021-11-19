// let person = {
//     name:'Ibrohim',
//     age: 13
// }
// person.name = 'Sodiq',
// person['age'] = 15

// console.log(person.age);


// var num =[1,3,5,9,10]
// function sumArray(number) {
//     var result = 0;
//     for (var item of number) {
//         result = result + item

//     }
//     return result
// }

// console.log(sumArray(num)); 


var elForm = document.querySelector("#input_task")
var elInputText = document.querySelector("#input_text")
var elList = document.querySelector("#todos_list")
var elImg = document.querySelector("#imgInput")
var elprice = document.querySelector("#price")



elForm.addEventListener('submit', function (evt) {
    evt.preventDefault()
    var result = []
   
    var newImg = document.createElement("img");
    newImg.setAttribute("src", elImg.value)
    newImg.setAttribute("width", "200")
    elImg.value = null
    elList.appendChild(newImg);

    var inputTask = elInputText.value.trim();
    result.push(inputTask);
    elInputText.value = null
    var newLi = document.createElement("li");
    newLi.textContent = inputTask
    elList.appendChild(newLi)

    var inputTask = elprice.value.trim();
    result.push(inputTask);
    elprice.value = null
    var cost = document.createElement('li')
    cost.textContent = inputTask + "$"
    elList.appendChild(cost)

    console.log(result);

})


