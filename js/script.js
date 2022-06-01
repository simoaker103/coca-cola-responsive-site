function moveCompanyContent() {
    if(window.innerWidth < 768){

        let newParent = document.getElementById('new-parent');
        let oldParent = document.getElementById('old-parent');

        while (oldParent.childNodes.length > 0) {
            newParent.appendChild(oldParent.childNodes[0]);
        }

        let divNewParent = document.querySelector('#new-parent > div');
        divNewParent.classList.remove('container-company');
        divNewParent.classList.add('container-company-sm');
        
    }

    if(window.innerWidth >= 768){

        var newParent = document.getElementById('new-parent');
        var oldParent = document.getElementById('old-parent');
   
        while (newParent.childNodes.length > 0) {
            oldParent.appendChild(newParent.childNodes[0]);
        }

        let divOldParent = document.querySelector('#old-parent > div');
        divOldParent.classList.remove('container-company-sm');
        divOldParent.classList.add('container-company');
    }
}

window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    let imgNavIconElement = document.querySelector(".collapse-nav-icon");
    let divNavWrapperElement = document.querySelector("#nav-wrapper");

    let compStyles = window.getComputedStyle(divNavWrapperElement);

    moveCompanyContent();

    imgNavIconElement.addEventListener('click', () => {

        let rightValue = compStyles.getPropertyValue('right');

        if(rightValue == '-100px'){
            divNavWrapperElement.style.right = '0px';
            imgNavIconElement.style.transform = 'scaleX(-1)';
        } else {
            divNavWrapperElement.style.right= '-100px';
            imgNavIconElement.style.transform = 'scaleX(1)';
        }
        
    });

    window.addEventListener('resize', () => {

        moveCompanyContent();

        let rightValue = compStyles.getPropertyValue('right');

        if(window.innerWidth >= 600 && rightValue == '-100px'){
            divNavWrapperElement.style.right = '0px';
            imgNavIconElement.style.transform = 'scaleX(-1)';
        }

        if(window.innerWidth < 600 && rightValue == '0px'){
            divNavWrapperElement.style.right = '-100px';
            imgNavIconElement.style.transform = 'scaleX(1)';
        }

    });
    
    window.addEventListener('activate.bs.scrollspy', function() { 

        let navElement = document.querySelector('#navbar li > a.active:last-child')
        
        if(navElement == null)
            return;
        
        navElement = navElement.getAttribute('href');

        if(navElement.includes('#flavourSection-')){
            let divFlavourTextBox = document.querySelector(navElement + ' .flavour-text-box');
            let divFlavourText = document.querySelector(navElement + ' .flavour-text');

            divFlavourTextBox.classList.add('anim-1');
            divFlavourText.classList.add('anim-2', 'anim-delay-1');
        }

        if(navElement == '#historySection'){
            let h3HistoryHeader = document.querySelector(navElement + ' h2');
            let pHistoryParagraph_1 = document.querySelectorAll(navElement + ' p');
            let imgHistoryImage = document.querySelector(navElement + ' img');

            h3HistoryHeader.classList.add('anim-2');
            pHistoryParagraph_1[0].classList.add('anim-2_left', 'anim-delay-0_3');
            imgHistoryImage.classList.add('anim-2_right', 'anim-delay-0_6');
            pHistoryParagraph_1[1].classList.add('anim-2_left', 'anim-delay-0_9');

        }

        if(navElement == '#companySection'){

            let h2CompanyHeader = document.querySelectorAll(navElement + ' h2');
            let pCompanyParagraph = document.querySelectorAll(navElement + ' p');

            console.log(h2CompanyHeader);

            h2CompanyHeader[0].classList.add('anim-3_bottom');
            pCompanyParagraph[0].classList.add('anim-3_bottom', 'anim-delay-0_3');
            pCompanyParagraph[1].classList.add('anim-3_bottom', 'anim-delay-0_6');
            h2CompanyHeader[1].classList.add('anim-3_bottom', 'anim-delay-0_9');
            pCompanyParagraph[2].classList.add('anim-3_bottom', 'anim-delay-1_2');

        }

        if(navElement == '#contactSection'){
        
        }

    });

});