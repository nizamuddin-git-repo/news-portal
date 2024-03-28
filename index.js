const loadCategory = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories"
  );
  const data = await res.json();
  console.log(data);


  
  
  const categoryBarContainer = document.getElementById('category-bar-container')


  data.data.news_category.forEach(item => {

    const div = document.createElement('div');

    div.innerHTML = `<button class="btn bg-red-300 border-0 mt-3 ">${item.category_name}</button>`;

    categoryBarContainer.appendChild(div);




  });

};


const loadNews = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/news/category/01');
    const data = await res.json();
    data.data.forEach((item) => {
        console.log(item);
    })
}







loadNews();

loadCategory();
