const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

//Uploading and displaying images
const reader = new FileReader();
const img = new Image();

const uploadImage = e => {
    reader.onload = () => {
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0)

            const imageData = ctx.getImageData(0,0, canvas.width, canvas.height);
            console.log(imageLoader);
        }
        img.src = reader.result;
    }
    reader.readAsDataURL(e.target.files[0]);
}

const imageLoader = document.getElementById('uploader');
imageLoader.addEventListener('change', uploadImage);

const change = () => {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data

    for(let i=0; i<data.length; i+=4) {
        data[i] = 255;
    }
    ctx.putImageData(imageData, 0, 0);
    document.querySelectorAll('button')[0].addEventListener('click', change);
}

// Greyscale effects
const greyscale = () => {
    const imageData = ctx.getImageData(0,0, canvas.width, canvas.height);
    const data = imageData.data

    for(let i=0; i<data.length; i += 4) {
        const grey = data[i]*0.21 + data[i+1] + data[i+2];
        data[i] = grey;
        data[i+1] = grey;
        data[i+2] = grey;
        
    }
    ctx.putImageData(imageData,0, 0);
    console.log(ImageData);
}


// Sepia effects
const sepia = () => {
    const imageData = ctx.getImageData(0,0, canvas.width, canvas.height);
    const data = imageData.data

    for(let i=0; i<data.length; i += 4) {
        const grey = data[i]*0.21 + data[i+1]*0.71 + data[i+2];
        data[i] = grey + 95;
        data[i+1] = grey + 58;
        data[i+2] = grey;
        
    }
    ctx.putImageData(imageData,0, 0);
    console.log(ImageData);
}

// Invert effects
const invert = () => {
    const imageData = ctx.getImageData(0,0, canvas.width, canvas.height);
    const data = imageData.data

    for(let i=0; i<data.length; i += 4) {
        data[i] = 255-data[i];
        data[i+1] = 255 - data[i+1];
        data[i+2] = 255 - data[i+2];
        
    }
    ctx.putImageData(imageData,0, 0);
    console.log(ImageData);
}

// rbg to rbg
const rbg = () => {
    const imageData = ctx.getImageData(0,0, canvas.width, canvas.height);
    const data = imageData.data

    for(let i=0; i<data.length; i += 4) {
        data[i] = data[i];
        data[i+1] = data[i+2];
        data[i+2] = data[i+1];
    }
    ctx.putImageData(imageData,0, 0);
    console.log(ImageData);
}
// rbg to bgr
const bgr = () => {
    const imageData = ctx.getImageData(0,0, canvas.width, canvas.height);
    const data = imageData.data

    for(let i=0; i<data.length; i += 4) {
        data[i] = data[i+2];
        data[i+1] = data[i+1];
        data[i+2] = data[i];
    }
    ctx.putImageData(imageData,0, 0);
    console.log(ImageData);
}
//rgb to gbr
const gbr = () => {
    const imageData = ctx.getImageData(0,0, canvas.width, canvas.height);
    const data = imageData.data

    for(let i=0; i<data.length; i += 4) {
        data[i] = data[i+1];
        data[i+1] = data[i];
        data[i+2] = data[i+2];
    }
    ctx.putImageData(imageData,0, 0);
    console.log(ImageData);
}

// rgb to grb
const grb = () => {
    const imageData = ctx.getImageData(0,0, canvas.width, canvas.height);
    const data = imageData.data

    for(let i=0; i<data.length; i += 4) {
        data[i] = data[i+1];
        data[i+1] = data[i];
        data[i+2] = data[i+2];
    }
    ctx.putImageData(imageData,0, 0);
    console.log(ImageData);
}

// clear all effects
const clearChanges = () => {
    img.src = reader.result;
}
document.querySelectorAll('button')[0].addEventListener('click', greyscale);
document.querySelectorAll('button')[1].addEventListener('click',sepia);
document.querySelectorAll('button')[2].addEventListener('click', invert);
document.querySelectorAll('button')[3].addEventListener('click', rbg);
document.querySelectorAll('button')[4].addEventListener('click', bgr);
document.querySelectorAll('button')[5].addEventListener('click', gbr);
document.querySelectorAll('button')[6].addEventListener('click', grb);
document.querySelectorAll('button')[7].addEventListener('click', clearChanges);
