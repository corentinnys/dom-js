// Find the element that contains Fast and Furious. If it's not the first element move it to the top of the list

let list = document.querySelectorAll('li');



 list.forEach((element)=>{
     if(element.innerHTML =='Fast and Furious')
     {
         element.classList.add("important");
         list[0].innerHTML = element.innerHTML;
         list[0].classList.add("important")
     }

 })


for (element of list)
{
    element.onclick=function(e)
    {
        if (e.target.innerHTML =='Fast and Furious' )
        {
            alert(' La franchise la plus importante de tous les temps, l\'histoire de la famille de DOM (inic) Toretto. Ce n\'est pas une question de voiture, c\'est une question de famille.');
        }else{
            alert(e.target.innerHTML);
        }

    }
}


for (let i = 0 ; i<list.length;i++)
{
    for (let y = list.length;y>0;y--)
    {

        if(list[i].isEqualNode(list[y])=== true && list[i]!= list[y])
        {
            list[y].remove()

        }
    }

}


let array =[];
for (element of list)
{
   array.push(element.innerHTML);
}

console.log(array);


document.querySelector('body').onkeyup = function (event)
{
    if(event.code =='KeyR')
    {
        for (let i = 1;i<list.length;i++)
        {
            let random = Math.floor(Math.random()*list.length-1);
            list[i].innerHTML = array[random];
        }

    }
    if(event.code == 'KeyD')
    {

      list[0].cloneNode(true);
    }
}



let sp1 = document.createElement("div");

// Get the reference element
let sp2 = document.querySelector("ul");
// Get the parent element
let parentDiv = sp2.parentNode;

// Insert the new element into before sp2
parentDiv.insertBefore(sp1, sp2)
let select = document.createElement('select')
var option = document.createElement("option");
var option_2 = document.createElement("option");
option.text = "importante franchise ";
option_2.text = "normal franchise ";
select.add(option);
select.add(option_2);
parentDiv.append(select);


select.onchange = function (e){
    if(e.target.value == "importante franchise")
    {
        for (element of list)
        {
           if (element.className != 'important')
           {
               element.style.visibility = 'hidden';
               element.style.display = "none"
           }
        }
    }
    else {
        for (element of list)
        {
             element.style.visibility = "visible"
                element.style.display = "block"

        }
    }
}
















