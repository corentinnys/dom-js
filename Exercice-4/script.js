

    //Select the last child of the <ol> tag and put it at the begining of the list
    let lastLi =document.querySelector('li:last-child') ;
    let firstLi = document.querySelector('li:first-child') ;

    let temp = firstLi.innerHTML;
    firstLi.innerHTML = lastLi.innerHTML
    lastLi.innerHTML= temp


    // Move the <h2> of the third section in the second one and vice-versa

    let sectionTitle2 =document.querySelector('section:nth-of-type(2) h2');
    let sectionTitle3 =document.querySelector('section:nth-of-type(3) h2');
    let temporaire = sectionTitle2.innerHTML;
    sectionTitle2.innerHTML = sectionTitle3.innerHTML
    sectionTitle3.innerHTML= temporaire


    // Delete the last section from the DOM, we don't need it anyways

    document.querySelector('section:last-of-type').remove()
