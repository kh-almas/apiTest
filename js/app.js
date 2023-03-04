function fetchAllData()
{
    const url = 'https://openapi.programming-hero.com/api/ai/tools';
    fetch(url)
        .then(res => res.json())
        // .then(data => console.log(data.data.tools))
        .then(data => showAllInfo(data.data.tools))
        // .catch(error => console.log(error))
}

const showAllInfo = data => {
    // console.log(data);
    data.forEach(data => {
        const allHub = document.getElementById('allHub');
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="card h-100">
                    <img src="${data.image}" class="card-img-top" alt="img">
                    <div class="card-body">
                        <div class="border-bottom">
                            <h4 class="card-title">Features</h4>
                            <ol id="features${data.id}">

                            </ol>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <h3 class="card-title">${data.name}</h3>
                                <div class="d-flex">
                                    <i class="bi bi-calendar-event mb-0"></i>
                                    <p class="ms-2 mb-0 ">${data.published_in}</p>
                                </div>
                            </div>
                            <div>
                                <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="modalButton">
                                    <i class="bi bi-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        `;

        if(data.features !== null){
            const features = document.getElementById(`features${data.id}`);
            console.log(features);
            try{
                data.features.map(data => {
                    const li = document.createElement('li');
                    li.innerText = data ? data : '';
                    // console.log(li);
                    // features.appendChild(li);
                })
            }catch(e){
                console.log(e);
            }

        }


        allHub.appendChild(div);
        // console.log(allHub);
    })
};


fetchAllData();