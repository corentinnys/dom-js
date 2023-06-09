

    let learned = ["Mamon","sarah","lucie","Yousef","Corentin"];
    let newLearned = [];
    for (user of learned)
    {
        let aleatoire =Math.ceil(Math.random()*learned.length);
        newLearned.push(learned[aleatoire])


    }


    for(user of newLearned)
    {
        let section =document.createElement('section');
        let paragraph = document.createElement('p');
        paragraph.innerHTML = user;
        let firstColor = Math.ceil(Math.random()*255);
        let secondColor = Math.ceil(Math.random()*255);
        let lastColor = Math.ceil(Math.random()*255);
        paragraph.style.backgroundColor= 'rgb(' + firstColor + ',' + secondColor + ',' + lastColor + ')';
        if (firstColor == 255 & secondColor == 255 && lastColor == 255)
        {
            paragraph.style.color = 'black';
        }
        else if (firstColor == 0 & secondColor == 0 && lastColor == 0)
        {
            paragraph.style.color = 'white';
        }


        document.querySelector('body').appendChild(section);
        section.appendChild(paragraph);
    }





