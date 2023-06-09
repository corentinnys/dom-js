
    // Exercice 2-1
    let classImportant = document.querySelectorAll('.important');

    for (items  of classImportant)
    {
        items.title = 'This is an important item';
    }

    // Exercice 2-2
    let pictures = document.querySelectorAll('img');

    for (img of pictures){
        if (img.className !='important')
        {
            img.style.display= 'none';
        }

    }

    // Exercice 2-3
    let paragraphs =document.querySelectorAll('p')
    for(items of paragraphs)
    {
        console.log(items.innerHTML);
        console.log(items.className);
    }

    // Exercice 2-4
    let paragraphes =document.querySelectorAll('p')
    for(items of paragraphes)
    {
        if(items.className=='')
        {
            let firstColor = Math.ceil(Math.random()*255);
            let secondColor = Math.ceil(Math.random()*255);
            let lastColor = Math.ceil(Math.random()*255);
            items.style.backgroundColor= 'rgb(' + firstColor + ',' + secondColor + ',' + lastColor + ')';
        }

    }