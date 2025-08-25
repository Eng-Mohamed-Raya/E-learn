// * nav open and close menu

const menu=document.querySelector(".navbar")
function show(){
    document.querySelector(".fa-bars").classList.add("hide")
    menu.style.display="block"
}
function hide(){
    menu.style.display="none";
    document.querySelector(".fa-bars").classList.remove("hide")
}
// * go to login page

function goLoginPage(){
    window.location.href="../login.html"
}


// * swiper
const swiper = new Swiper('.swiper', {
  loop: true,
  breakpoints:{
    0:{
        slidesPerView:1
    },
    1200:{
        slidesPerView:2
    },
  },

});

//* function to fetch 
async function fetchData(url) {
    let res = await fetch(url);
    return  res.json();
}

//* blogs

function createBlog(id,imgSrc,title,authorName,imgAuthorSrc,description,viewer){
    return `
    <div class="card swiper-slide" key="${id}">
        <div class="img">
            <img src="${imgSrc}" alt="${title} image">
        </div>
        <p class="card-title">${title}</p>
        <div class="author">
            <img src="${imgAuthorSrc}" alt="${authorName} image" class="author-img">
            <span class="author-name">${authorName}</span>
        </div>
        <p class="description">
            ${description}
        <div class="row">
            <a href="">Read more</a>
            <div class="viewer">
                <i class="fa-solid fa-eye"></i>
                <span>${viewer}</span>
            </div>
        </div>
     </div>
    `
}
const blogContainer=document.querySelector(".blog-container");

fetchData("https://test-api-v1-vert.vercel.app/v1/blogs")
.then(blogs=>{
    blogs.forEach((blog)=> {
        const {id,image,title,author,authorImage,description,viewers}=blog;
        blogContainer.innerHTML+=createBlog(id,image,title,author,authorImage,description,viewers)
        
    });
}).catch(err=>alert(err))
    

//* Articles

function createArticles(id,imgSrc,title,description,category,length,authorName,imgAuthorSrc,price){
    return `
    <div class="card" key="${id}">
        <div class="img">
            <img src="${imgSrc}" alt="${category} img">
        </div>
        <div class="row">
            <div class="category">
                <i class="fa-solid fa-table-cells-large"></i>
                <span>
                    ${category}
                </span>
            </div>
            <div class="length">
                <i class="fa-regular fa-clock"></i>
                <span>${length}</span>
            </div>
        </div>
        <p class="card-title">${title}</p>
        
        <p class="description">
           ${description}
        </p>
        <div class="row">
            <div class="author">
            <img src="${imgAuthorSrc}" alt="${authorName} img" class="author-img">
            <span class="author-name">${authorName}</span>
        </div>
            <div class="price">
                <i class="discount">$${price + 5}</i>
                <span>$${price}</span>
            </div>
        </div>
    </div>
    `
}
const articleContainer=document.querySelector(".articles-container");



fetchData("https://test-api-v1-vert.vercel.app/v1/articles")
.then(articles=>{
    articles.forEach((article)=> {
       const {id,image,title,description,category,lenght,author,authorImage,price} =article;
        articleContainer.innerHTML+=createArticles(id,image,title,description,category,lenght,author,authorImage,price)
        
    });
}).catch(err=>alert(err))

