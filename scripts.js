const reviews = [
    {
        id: 1,
        name: "Susan Smith",
        job: "Web Developer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry."
    },
    {
        id: 2,
        name: "Anna Johnson",
        job: "Web Designer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-2_np9x5l.jpg",
        text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe."
    },
    {
        id: 3,
        name: "Peter Jones",
        job: "Intern",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883412/person-3_ipa0mj.jpg",
        text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
    },
    {
        id: 4,
        name: "Bill Anderson",
        job: "The Boss",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo authentic kitsch raclette post-ironic +1."
    }
];


const img=document.getElementById("person-img");
const author=document.getElementById("author");
const job=document.getElementById("job");
const info=document.getElementById("info");
const prevbtn=document.querySelector("#prev-btn");
const nextbtn=document.querySelector("#next-btn");
const randombtn=document.querySelector("#random-btn");
let currentItem=0;

window.addEventListener("DOMContentLoaded",function(){
    showperson();
})
prevbtn.addEventListener("click",function(){
    currentItem--;
    if(currentItem<0){
        currentItem=reviews.length-1;
    }
        
        showperson(currentItem);
});
nextbtn.addEventListener("click",function(){
    currentItem++;
    if(currentItem>reviews.length-1){
        currentItem=0;
    }
        showperson(currentItem);
    
});

randombtn.addEventListener("click",function(){
    currentItem=Math.floor(Math.random()*reviews.length);
    showperson(currentItem);
});
function showperson(person){
    const item=reviews[person];
    img.src=item.img;
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.text;
}
