    // exercice 1-1
    let title = document.title;
    console.log(title);

    // exercice 1-2

    document.title ='Modification du Dom';

    // exercice 1-3

   let bodyContent =document.querySelector('body').children;

   for (items of bodyContent){
       console.log(items);
   }

    // exercice 1-4

    let firstColor = Math.ceil(Math.random()*255);
    let secondColor = Math.ceil(Math.random()*255);
    let lastColor = Math.ceil(Math.random()*255);


    document.querySelector('body').style.backgroundColor= 'rgb(' + firstColor + ',' + secondColor + ',' + lastColor + ')';