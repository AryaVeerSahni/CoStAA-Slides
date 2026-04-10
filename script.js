const tab = document.querySelector(`#tabletId`);
const corner1 = document.querySelectorAll(`.corner`)[0];
const corner2 = document.querySelectorAll(`.corner`)[1];
const corner3 = document.querySelectorAll(`.corner`)[2];
const corner4 = document.querySelectorAll(`.corner`)[3];
const shadowDivJs = document.querySelector('#shadowDivId');
const detailsSecJs = document.querySelector('#detailsSecId');
const costaaImgJs = document.querySelector('.costaaImg');
const nameDivJs = document.querySelector('.nameDiv');
const deptDivJs = document.querySelector('#deptDivId');

const line1 = document.querySelector('#upline');
const line2 = document.querySelector('#downline');

const costaaGlitch = PowerGlitch.glitch(costaaImgJs, {
    playMode: "manual"
});

const nameGlitch = PowerGlitch.glitch(nameDivJs, {
    playMode: "always"
})

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
            duration: 0.5,
            ease: 'linear'
        })
        gsap.to(corner2, {
            right: '30%',
            duration: 0.5,
            ease: 'linear'
        })
        gsap.to(corner3, {
            right: '30%',
            duration: 0.5,
            ease: 'linear'
        })
        gsap.to(corner4, {
            left: '30%',
            duration: 0.5,
            ease: 'linear'
        })
        
    }, 500)

    setTimeout(()=>{
        costaaGlitch.startGlitch();
        costaaImgJs.src = `imgs/${imgPath}`;
    }, 1750)
    
    setTimeout(()=>{
        costaaGlitch.stopGlitch();

        detailsSecJs.querySelectorAll('.nameDiv').forEach(el => {
            el.innerHTML = name;
        });

        detailsSecJs.querySelector('.deptDiv').innerHTML = depName;
    }, 2000)

    setTimeout(()=>{
        tab.style.width = '80.15vw';
        gsap.to(corner1, {
            top: '2rem',
            left: '1rem',
            duration: 0.5,
            ease: 'linear'
        })
        gsap.to(corner2, {
            top: '2rem',
            right: '1rem',
            duration: 0.5,
            ease: 'linear'
        })
        gsap.to(corner3, {
            bottom: '2rem',
            right: '1rem',
            duration: 0.5,
            ease: 'linear'
        })
        gsap.to(corner4, {
            bottom: '2rem',
            left: '1rem',
            duration: 0.5,
            ease: 'linear'
        })
    }, 2000)

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
    }, 3000)
}

function photoAppear() {
    setTimeout(()=>{
        shadowDivJs.classList.remove('disNone');
        line1.classList.remove('disNone');
        line2.classList.remove('disNone');
        detailsSecJs.classList.remove('detailsSecPosn1');
        detailsSecJs.classList.add('detailsSecPosn2');
    }, 1500)
}

document.addEventListener('keydown', event=>{
    if(event.key === '0'){
        everything(`Welcome To<br><br><span id="apogee">APOGEE</span>`, ``, `apogeeLogo.png`);
        setTimeout(()=>{
            line1.classList.add('disNone');
            line2.classList.add('disNone');
            detailsSecJs.classList.remove('detailsSecPosn2');
            detailsSecJs.classList.add('detailsSecPosn1');
            costaaGlitch.startGlitch();
            costaaImgJs.src = `imgs/${imgPath}`;
        }, 1500)
        setTimeout(()=>{
            costaaGlitch.stopGlitch();
            shadowDivJs.classList.add('disNone');
        }, 2000)
    }
    if(event.key === '1'){
        everything(`Atharv<br>Agarwal`, `Department of Visual Media`, `atharvBhaiya.png`);
        photoAppear();
        setTimeout(()=>{
            deptDivJs.className = `deptDiv dvm`;
        }, 1500)
    }
    if(event.key === '2'){
        everything(`Ishita<br>Sethi`, `Department of Paper<br>Evaluation and Presentation`, `ishitaDidi.png`);
        photoAppear();
        setTimeout(()=>{
            deptDivJs.className = `deptDiv pep`;
        }, 1500)
    }
    if(event.key === '3'){
        everything(`Aurvind<br>Mohanty`, `Department of Art,<br>Design and Publicity`, `aurvindBhaiya.png`);
        photoAppear();
        setTimeout(()=>{
            deptDivJs.className = `deptDiv adp`;
        }, 1500)
    }
    if(event.key === '4'){
        everything(`Anagha<br>Sharma`, `Department of Publications and<br>Correspondence for APOGEE`, `anaghaDidi.png`);
        photoAppear();
        setTimeout(()=>{
            deptDivJs.className = `deptDiv pcra`;
        }, 1500)
    }
    if(event.key === '5'){
        everything(`Shreyak<br>Shintre`, `Department of Controls`, `shreyakBhaiya.png`);
        photoAppear();
        setTimeout(()=>{
            deptDivJs.className = `deptDiv controls`;
        }, 1500)
    }
    if(event.key === '6'){
        everything(`Shreya<br>Karnwal`, `Department of Reception<br>and Accommodation`, `shreyaDidi.png`);
        photoAppear();
        setTimeout(()=>{
            deptDivJs.className = `deptDiv recnacc`;
        }, 1500)
    }
    if(event.key === '7'){
        everything(`Shivansh<br>Rastogi`, `Department of Sponsorship<br>and Marketing`, `shivanshBhaiya.png`);
        photoAppear();
        setTimeout(()=>{
            deptDivJs.className = `deptDiv spons`;
        }, 1500)
    }
    if(event.key === '8'){
        everything(`Aditya<br>Khandelwal`, `General Secretary,<br>Students' Union`, `adityaBhaiya.png`);
        photoAppear();
        setTimeout(()=>{
            deptDivJs.className = `deptDiv gensec`;
        }, 1500)
    }
    if(event.key === '9'){
        everything(`Sajal Yadav`, `President,<br>Students' Union`, `sajalBhaiya.png`);
        photoAppear();
        setTimeout(()=>{
            deptDivJs.className = `deptDiv prez`;
        }, 1500)
    }
})