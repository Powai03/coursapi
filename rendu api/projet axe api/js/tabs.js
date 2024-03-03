let tabs = document.querySelectorAll(".tabs li");
let contenus = document.querySelectorAll(".contenu div");

tabs.forEach(function(tab) {
    tab.addEventListener('click', function () {
        tabs.forEach(function(tab) { //on suppr actif partout
            tab.classList.remove("actif");
        });

        contenus.forEach(function(contenu) { //on suppr actif partout
            contenu.classList.remove("actif");
        });

        console.log();

        this.classList.add("actif"); 
        if (this.innerText == 'Gryffondor') { 
            const divHouse = document.querySelector('.gryf'); 
            divHouse.classList.add('actif'); //on lui donne actif
        } 
        else if (this.innerText =='Serpentard') {
            const divHouse = document.querySelector('.serp');
            divHouse.classList.add('actif');
        }
        else if (this.innerText == 'Poufsouffle') {
            const divHouse = document.querySelector('.pouf');
            divHouse.classList.add('actif');
        }
        else if (this.innerText == 'Serdaigle') {
            const divHouse = document.querySelector('.serd');
            divHouse.classList.add('actif');
        }            
    });
});