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
                catElement.className = '';
                catElement.innerHTML = `<div class="mt-2 p-1 hover:bg-green-700 hover:text-white w-full hover:rounded hover:cursor-pointer" onclick="loadCategory('${category.id}')">${category.category_name}</div>
      `;

                // Append to container
                cats.appendChild(catElement);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });

    // get all plants
    loadPlants('https://openapi.programming-hero.com/api/plants');
})

function loadPlants(url) {
    // get all plants
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const plants = document.getElementById('plants');
            plants.innerHTML = '';
            for (const plant of data.plants) {
                const plantElement = document.createElement('div');
                plantElement.innerHTML = `<div class="card bg-base-100 w-full shadow-sm">
                    <figure class="p-4">
                        <img src="${plant.image}"
                            alt="Shoes" class="rounded-xl h-50 w-full object-cover " />
                    </figure>
                    <div class="card-body py-0 pb-4 text-right">
                        <span class="card-title cursor-pointer" onclick="showDetails(${plant.id})">${plant.name}</span>
                        <span class="text-justify line-clamp-2 text-sm">${plant.description}</span>
                        <div class="flex justify-between">
                            <div class="rounded-3xl bg-green-200 px-3 py-1 text-green-800">${plant.category}</div>
                            <div class="font-bold">৳${plant.price}</div>
                        </div>
                        <div class="card-actions">
                            <button class="btn bg-green-800 text-white rounded-3xl w-full" onclick="addToCart('${plant.name}','${plant.price}')">Add to Cart</button>
                        </div>
                    </div>
                </div>
      `;

                // Append to container
                plants.appendChild(plantElement);
            };
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function showDetails(plantId) {
    // get plant details
    fetch('https://openapi.programming-hero.com/api/plant/' + plantId)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const modalBody = document.getElementById('modal-body');
            modalBody.innerHTML = `
            <img src="${data.plants.image}" alt="Image" class="rounded-xl h-60 w-full object-cover mb-4 " />
            <h3 class="font-bold text-lg mb-2">${data.plants.name}</h3>
            <p class="text-justify mb-2">A card component has a figure, a body part, and inside body there are title and actions parts. The figure is a container for images or videos. The body part contains the main content of the card, including the title and any additional information or actions related to the card.</p>
            <div class="flex justify-between mb-2">
                <div class="rounded-3xl bg-green-200 px-3 py-1 text-green-800">${data.plants.category}</div>
                <div class="font-bold">৳${data.plants.price}</div>
            </div>
            <button class="btn bg-gray-800 text-white rounded-3xl w-full" onclick="document.getElementById('plant-modal').classList.remove('modal-open')">Close</button>
      `;
            const modal = document.getElementById('plant-modal');
            modal.classList.add('modal-open');
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function loadCategory(categoryId) {
    loadPlants('https://openapi.programming-hero.com/api/category/' + categoryId);
}

