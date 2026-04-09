const tab = document.querySelector(`#tabletId`);
const corner1 = document.querySelectorAll(`.corner`)[0];
const corner2 = document.querySelectorAll(`.corner`)[1];
const corner3 = document.querySelectorAll(`.corner`)[2];
const corner4 = document.querySelectorAll(`.corner`)[3];
const shadowDivJs = document.querySelector('#shadowDivId');
const detailsSecJs = document.querySelector('#detailsSecId');
const costaaImgJs = document.querySelector('.costaaImg');

const deptDivJs = document.querySelector('.deptDiv');
const downLine = document.querySelectorAll('.upLine')[1];

const costaaGlitch = PowerGlitch.glitch(costaaImgJs, {
    playMode: "manual"
});

function everything(name, depName, imgPath) {
    const glitchInterval1 = setInterval(()=>{
        tab.classList.toggle('tabletToggle');
        shadowDivJs.classList.toggle('shadowDiv');
        detailsSecJs.classList.toggle('disNone');
    }, 75)

    setTimeout(()=>{
        tab.classList.add('tabletToggle');
        shadowDivJs.classList.remove('shadowDiv');
        detailsSecJs.classList.add('disNone');
        clearInterval(glitchInterval1);
    }, 500)

    setTimeout(()=>{
        tab.style.width = '30vw';
        gsap.to(corner1, {
            left: '30%',
            duration: 0.75,
            ease: 'linear'
        })
        gsap.to(corner2, {
            right: '30%',
            duration: 0.75,
            ease: 'linear'
        })
        gsap.to(corner3, {
            right: '30%',
            duration: 0.75,
            ease: 'linear'
        })
        gsap.to(corner4, {
            left: '30%',
            duration: 0.75,
            ease: 'linear'
        })
        
    }, 750)

    setTimeout(()=>{
        costaaGlitch.startGlitch();
        costaaImgJs.src = `imgs/${imgPath}`;
    }, 2500)
    
    setTimeout(()=>{
        costaaGlitch.stopGlitch();
        detailsSecJs.innerHTML = `<div class="nameDiv">${name}</div>
                <span class="upLine"></span>
                <div class="deptDiv">${depName}</div>
                <span class="upLine"></span>`
    }, 3000)

    setTimeout(()=>{
        tab.style.width = '80.15vw';
        gsap.to(corner1, {
            top: '2rem',
            left: '1rem',
            duration: 0.75,
            ease: 'linear'
        })
        gsap.to(corner2, {
            top: '2rem',
            right: '1rem',
            duration: 0.75,
            ease: 'linear'
        })
        gsap.to(corner3, {
            bottom: '2rem',
            right: '1rem',
            duration: 0.75,
            ease: 'linear'
        })
        gsap.to(corner4, {
            bottom: '2rem',
            left: '1rem',
            duration: 0.75,
            ease: 'linear'
        })
    }, 3500)

    setTimeout(()=>{
        const glitchInterval2 = setInterval(()=>{
            tab.classList.toggle('tabletToggle');
            shadowDivJs.classList.toggle('shadowDiv');
            detailsSecJs.classList.toggle('disNone');
        }, 75)

        setTimeout(()=>{
            tab.classList.remove('tabletToggle');
            shadowDivJs.classList.add('shadowDiv');
            detailsSecJs.classList.remove('disNone');
            clearInterval(glitchInterval2);
        }, 500)
    }, 4500)
}

document.addEventListener('keydown', event=>{
    if(event.key === '1'){
        everything(`Atharv<br>Agarwal`, `Department of Visual Media`, `atharvBhaiya.png`);
    }
    if(event.key === '4'){
        everything(`Anagha<br>Sharma`, `Department of<br>Publications and Correspondence<br>for APOGEE`, `anaghaDidi.png`);
    }
    if(event.key === '5'){
        everything(`Shreyak<br>Shintre`, `Department of Controls`, `shreyakBhaiya.png`);
    }
    if(event.key === '7'){
        everything(`Shivansh<br>Rastogi`, `Department of<br>Sponsorship and Marketing`, `shivanshBhaiya.png`);
    }
    if(event.key === '6'){
        everything(`Shreya<br>Karnwal`, `Department of<br>Reception and Accommodation`, `shreyaDidi.png`);
    }
    if(event.key === '3'){
        everything(`Aurvind<br>Mohanty`, `Department of<br>Art, Design and Publicity`, `aurvindBhaiya.png`);
    }
    if(event.key === '2'){
        everything(`Ishita<br>Sethi`, `Department of<br>Paper Evaluation and Presentation`, `ishitaDidi.png`);
    }
    if(event.key === '8'){
        everything(`Aditya<br>Khandelwal`, `General Secretary,<br>Students' Union`, `adityaBhaiya.png`);
    }
    if(event.key === '9'){
        everything(`Sajal<br>Yadav`, `President,<br>Students' Union`, `sajalBhaiya.png`);
    }
})