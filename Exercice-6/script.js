document.querySelector('#firstname').onkeyup = function (e)
{
    document.querySelector('#display-firstname').innerHTML = e.target.value;
}


document.querySelector('#age').onkeyup = function (e){
    let  age =  e.target.value;
    if(age>18)
    {
        document.querySelector('#a-hard-truth').style.visibility ='visible';
    }
    else{
        document.querySelector('#a-hard-truth').style.visibility ='hidden';
    }
}

document.getElementById('pwd').onkeyup = function(e) {
    let value = e.target.value;
    if (value.length<6){
        e.target.style.background = 'red';
    }
    else {
        e.target.style.background='green';
    }
}
document.getElementById('pwd-confirm').onkeyup = function (e)
{
    let pwd= document.getElementById('pwd').value;
    if(e.target.value == pwd)
    {
        e.target.style.background='green';
    }else{
        e.target.style.background ='red';
    }
}

document.getElementById('toggle-darkmode').onchange = function (e)
{
    console.log(e.target.value);
    if((e.target.value == "dark"))
    {
        document.querySelector('body').style.background='black';
        let heading = document.querySelectorAll('h2');
        let p = document.querySelector('p').style.color='white';
        let footer = document.querySelector('footer').style.color='white';
        let section = document.querySelector('#a-hard-truth').style.color='white';

        for (items of heading){
            items.style.color = 'white';
        }
    }else{
        document.querySelector('body').style.background='white';
        let heading = document.querySelectorAll('h2');
        let p = document.querySelector('p').style.color='black';
        let footer = document.querySelector('footer').style.color='black';
        let section = document.querySelector('#a-hard-truth').style.color='black';

        for (items of heading){
            items.style.color = 'black';
        }
    }
}

