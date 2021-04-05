const reviews = [
    {id: 1,
    name: "Biko Jeremy",
    job: "Developer",
    img: "Pussinboots.jpg",
    info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    },
    {id: 2,
    name: "Logan Biteete",
    job: "System Administrator",
    img: "https://res.cloudinary.com/health-plants-of-uganda/image/upload/v1615963460/reydnxuhix7ihioh1zsx.jpg",
    info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    },
    {id: 3,
    name: "Alvin Biteete",
    job: "Frontend developer",
    img: "https://res.cloudinary.com/health-plants-of-uganda/image/upload/v1615451685/o6mt5xshzlrfwrvey23l.jpg",
    info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    },
    {id: 4,
    name: "Ihoza Ndimurungi",
    job: "Backend developer",
    img: "https://res.cloudinary.com/health-plants-of-uganda/image/upload/v1615456166/tiv1fk0crrjgso9nnyqv.jpg",
    info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    }
];

// select items
const img = document.getElementById('pp');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-button');
const nextBtn = document.querySelector('.next-button');
const randomBtn = document.querySelector('.randomBtn');


//Set starting Item
let currentItem = 0;

// load initial item.
window.addEventListener('DOMContentLoaded', function(){
showPerson(currentItem);
});

function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    info.textContent = item.info;
    job.textContent = item.job;
    author.textContent = item.name;


}

// show next person
nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length -1 ){
        currentItem = 0;
    };
    showPerson(currentItem);
});

prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0 ){
        currentItem = 3;
    };
    showPerson(currentItem);
});

randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
})