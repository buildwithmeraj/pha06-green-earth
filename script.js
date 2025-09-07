window.addEventListener("load", async function () {
    fetch('https://openapi.programming-hero.com/api/categories')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const cats = document.getElementById('categories');
            for (const category of data.categories) {
                const catElement = document.createElement('div');
                catElement.className = 'mt-2 p-1 hover:bg-green-700 hover:text-white hover:w-full hover:rounded hover:cursor-pointer';
                catElement.innerHTML = `${category.category_name}
      `;

                // Append to container
                cats.appendChild(catElement);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });

    // get all plants
    fetch('https://openapi.programming-hero.com/api/plants')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const plants = document.getElementById('plants');
            data.plants.slice(0, 9).forEach(plant => {
                const plantElement = document.createElement('div');
                plantElement.innerHTML = `<div class="card bg-base-100 w-full shadow-sm">
                    <figure class="p-4">
                        <img src="${plant.image}"
                            alt="Shoes" class="rounded-xl h-50 w-full object-cover " />
                    </figure>
                    <div class="card-body py-0 pb-4 text-right">
                        <span class="card-title">${plant.name}</span>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts
                        </p>
                        <div class="flex justify-between">
                            <div class="rounded-3xl bg-green-200 px-3 py-1 text-green-800">${plant.category}</div>
                            <div class="font-bold">৳${plant.price}</div>
                        </div>
                        <div class="card-actions">
                            <button class="btn bg-green-800 text-white rounded-3xl w-full">Add to Cart</button>
                        </div>
                    </div>
                </div>
      `;

                // Append to container
                plants.appendChild(plantElement);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
})