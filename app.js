const inputfield = document.getElementById('input-field');
const searchButton = document.getElementById('search-button');
const sliderSection = document.getElementById('slider-section');
const gallary = document.getElementById('gallary');
const sliderButton = document.getElementById('slider-button');

const kye = `23428884-6941caab716efdb81d5472709`;


// 
let sliderImg = [];

searchButton.addEventListener('click',()=>{
    
    const search = inputfield.value;
    const url = `https://pixabay.com/api/?key=${kye}&q=${search}&image_type=photo&pretty=true`;
    const loadData = () =>{
        fetch(url)
        .then(res => res.json())
        .then(data => displayImage(data.hits))
    }
    loadData()
    slide.innerHTML = '';
    const displayImage = images =>{
        gallary.textContent = '';
        console.log(images);
        images.forEach(image => {
            const div = document.createElement('div');
            div.classList= 'col-md-3 show-img';
            div.innerHTML= `
            <img onclick=selectAddimg(event,"${image.largeImageURL}") src="${image.largeImageURL}" class="img-fluid img-thumbnail " alt="...">
            `
            gallary.appendChild(div);
        });
    }

    inputfield.value= '';
})

// add on slider

const selectAddimg = (event,img) =>{
    let elemnt = event.target;
    elemnt.classList.add('selected')
    // console.log(elemnt);

    let item = sliderImg.indexOf(img);
    if(item === -1){
        sliderImg.push(img);
    }
    else{
        alert('hey alrady selected')
    }
    
    // console.log(sliderImg);
}



let i = 0;
const slide = document.getElementById('slide');
const img = document.createElement('img');

const durotion = document.getElementById('durotion');

img.classList= 'img-fluid img-thumbnail mx-auto'
const sliderOn = (time)=>{
    setInterval(()=>{
        // sliderImg
        if(i === sliderImg.length){
            i=0;
        }
        const imageUrl = (sliderImg[i]);
        i++;
        img.setAttribute("src",imageUrl)
    },time)
    slide.appendChild(img);
}

sliderButton.addEventListener('click',()=>{
    const durotionValue = durotion.value || 1000;
    sliderOn(durotionValue);
    gallary.textContent = '';
    // console.log(durotionValue);
})