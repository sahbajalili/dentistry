let doc = document

let firstDentist = doc.querySelector('.first-dentist')
let secondDentist = doc.querySelector('.second-dentist')
let thirdDentist = doc.querySelector('.third-dentist')

let firstDentistTextBox = doc.querySelector('.first-dentist-text')
let secondDentistTextBox = doc.querySelector('.second-dentist-text')
let thirdDentistTextBox = doc.querySelector('.third-dentist-text')

let firstDentistSocialMedia = doc.querySelector('.first-dentist-social-media')
let secondDentistSocialMedia = doc.querySelector('.second-dentist-social-media')
let thirdDentistSocialMedia = doc.querySelector('.third-dentist-social-media')

let firstCircle = doc.querySelector('.first-circle')
let secondCircle = doc.querySelector('.second-circle')
let thirdCircle = doc.querySelector('.third-circle')

let innerFirstDentist = firstDentist.innerHTML
let innersecondDentist = secondDentist.innerHTML
let innerthirdDentist = thirdDentist.innerHTML

let previousButton = doc.querySelector('.previous-button')
let nextButton = doc.querySelector('.next-button')

previousButton.addEventListener('click' , previousDentist)
nextButton.addEventListener('click' , nextDentist)

let goNext = thirdDentist
let goPrevious = firstDentist

function previousDentist() {
    console.log('previous')

    if (goPrevious == firstDentist) {
        console.log('if')

        secondDentist.style.transform = 'translateY(0px)'
        firstDentist.style.transform = 'translateY(-30px)'

        secondDentistTextBox.style.top = '240px'
        firstDentistTextBox.style.top = '178px'

        secondDentistSocialMedia.style.display = 'none'
        firstDentistSocialMedia.style.display = 'flex'
        
        secondCircle.style.width = '13.97px'
        secondCircle.style.backgroundColor = '#FFD3B3'
        firstCircle.style.width = '52px'
        firstCircle.style.backgroundColor = '#FF9140'

        goPrevious = thirdDentist
        goNext = secondDentist

    } else if (goPrevious == thirdDentist) {
        console.log('if1')

        firstDentist.style.transform = 'translateY(0px)'
        thirdDentist.style.transform = 'translateY(-30px)'

        firstDentistTextBox.style.top = '240px'
        thirdDentistTextBox.style.top = '178px'

        firstDentistSocialMedia.style.display = 'none'
        thirdDentistSocialMedia.style.display = 'flex'

        firstCircle.style.width = '13.97px'
        firstCircle.style.backgroundColor = '#FFD3B3'
        thirdCircle.style.width = '52px'
        thirdCircle.style.backgroundColor = '#FF9140'

        goPrevious = secondDentist
        goNext = firstDentist

    } else if (goPrevious == secondDentist) {
        console.log('if2')
        
        thirdDentist.style.transform = 'translateY(0px)'
        secondDentist.style.transform = 'translateY(-30px)'

        thirdDentistTextBox.style.top = '240px'
        secondDentistTextBox.style.top = '178px'

        thirdDentistSocialMedia.style.display = 'none'
        secondDentistSocialMedia.style.display = 'flex'

        thirdCircle.style.width = '13.97px'
        thirdCircle.style.backgroundColor = '#FFD3B3'
        secondCircle.style.width = '52px'
        secondCircle.style.backgroundColor = '#FF9140'

        goPrevious = firstDentist
        goNext = thirdDentist
    }
}

function nextDentist() {

    console.log('next')

    if (goNext == thirdDentist) {
        console.log('if')

        secondDentist.style.transform = 'translateY(0px)'
        thirdDentist.style.transform = 'translateY(-30px)'

        secondDentistTextBox.style.top = '240px'
        thirdDentistTextBox.style.top = '178px'

        secondDentistSocialMedia.style.display = 'none'
        thirdDentistSocialMedia.style.display = 'flex'
        
        secondCircle.style.width = '13.97px'
        secondCircle.style.backgroundColor = '#FFD3B3'
        thirdCircle.style.width = '52px'
        thirdCircle.style.backgroundColor = '#FF9140'

        goNext = firstDentist
        goPrevious = secondDentist

    } else if (goNext == firstDentist) {
        console.log('if1')

        thirdDentist.style.transform = 'translateY(0px)'
        firstDentist.style.transform = 'translateY(-30px)'

        thirdDentistTextBox.style.top = '240px'
        firstDentistTextBox.style.top = '178px'

        thirdDentistSocialMedia.style.display = 'none'
        firstDentistSocialMedia.style.display = 'flex'

        thirdCircle.style.width = '13.97px'
        thirdCircle.style.backgroundColor = '#FFD3B3'
        firstCircle.style.width = '52px'
        firstCircle.style.backgroundColor = '#FF9140'

        goNext = secondDentist
        goPrevious = thirdDentist

    } else if (goNext == secondDentist) {
        console.log('if2')

        firstDentist.style.transform = 'translateY(0px)'
        secondDentist.style.transform = 'translateY(-30px)'

        firstDentistTextBox.style.top = '240px'
        secondDentistTextBox.style.top = '178px'

        firstDentistSocialMedia.style.display = 'none'
        secondDentistSocialMedia.style.display = 'flex'

        firstCircle.style.width = '13.97px'
        firstCircle.style.backgroundColor = '#FFD3B3'
        secondCircle.style.width = '52px'
        secondCircle.style.backgroundColor = '#FF9140'

        goNext = thirdDentist
        goPrevious = firstDentist

    }
}

// let loading = doc.querySelector('.loading')
// let cover = doc.querySelector('.cover')

// window.addEventListener('load' , siteLoaded)

// function siteLoaded() {
//     loading.style.opacity = '0'
//     cover.style.opacity = '0'
//     cover.style.display = 'none'
// }