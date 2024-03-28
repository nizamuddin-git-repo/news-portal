const loadCategory = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories"
  );
  const data = await res.json();
  //   console.log(data);

  const categoryBarContainer = document.getElementById(
    "category-bar-container"
  );

  data.data.news_category.forEach((item) => {
    const div = document.createElement("div");

    div.innerHTML = `<button onclick="loadNews('${item.category_id}')" class="btn bg-red-300 border-0 mt-3 ">${item.category_name}</button>`;

    categoryBarContainer.appendChild(div);
  });
};






const loadNews = async (catId) => {
  console.log(catId);
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${catId}`
  );
  const data = await res.json();
  const newsContainer = document.getElementById("news-container");

  newsContainer.innerHTML = "";

  data.data.forEach((item) => {
    // console.log(item);
    const div = document.createElement("div");
    div.innerHTML = `
    
    
    <div class="card card-side bg-base-100 shadow-xl h-80 ">
        <figure><img class="rounded-xl w-64 h-80" src="${
          item.image_url
        }" alt="Movie"/></figure>
        <div class="card-body">
        <h2 class="text-end">${item.rating?.number}</h2>
            <sup class="text-end">${item.rating?.badge}</sup>
          <h4 class="font-bold text-lg">${item.title}</h4>
          <p class="text-xs">${item.details.slice(0, 100)}</p>
          <div class="card-actions justify-end">
            <div class="flex">
                <div>
                    <img src="" alt="">
                    <img src="" alt="">
                    <p>450</p>
                </div>
            </div>
            <button class="btn btn-primary">details</button>
          </div>
        </div>
      </div>

</div>

    `;
    newsContainer.appendChild(div);
  });
};

loadNews("01");

loadCategory();
