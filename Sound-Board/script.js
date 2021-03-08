
// const applause = document.getElementById(applause);
// const boo = document.getElementById(boo);
// const gasp = document.getElementById(gasp);
// const tada = document.getElementById(tada);
// const victory = document.getElementById(victory);
// const wrong = document.getElementById(wrong);

const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach(sound => {
    
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound
    
    btn.addEventListener('click', () => {
        stopSounds()

        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
})

// function stopSounds() {
//     sounds.forEach(sound => {
//         const song =document.getElementById
//     })
// }

function stopSounds() {
    sounds.forEach(sound => {
        const affect = document.getElementById(sound)

        affect.pause()
        affect.currentTime = 0;
    })
}