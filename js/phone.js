const loadPhoneData = searchPhone => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchPhone}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhone(data.data))
}
loadPhoneData('iphone');
const displayPhone = phones => {
    const cardGrp = document.getElementById('card-grp');
    for (const phone of phones) {
        const cards = document.createElement('card');
        cards.classList.add('cards');
        cards.innerHTML = `
        <div class="card">
                <img class="img-fluid w-50 mx-auto p-4" src="${phone.image}"alt="reload">
                <div class="card-body">
                    <h5 class="card-title">Name: ${phone.phone_name}</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
        `;
        cardGrp.appendChild(cards);
        console.log(phone);
    }
    // console.log(phone);
}