// spinner function 
const toggleSpinner = displayStyle => {
    document.getElementById('spinner').style.display = displayStyle;
}
const toggleSerachResult = displayStyle => {
    document.getElementById('card-section').style.display = displayStyle;
}


// search Phone in input 
const searchPhoneData = () => {
    // console.log('checked')
    const searchInput = document.getElementById('search-field').value;
    // console.log(searchInput)
    loadPhoneData(searchInput);
    document.getElementById('search-field').value = '';
    // display spinner 
    toggleSpinner('block');
    toggleSerachResult('none');
}


// load data from api 
const loadPhoneData = searchPhone => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchPhone}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhone(data.data))
}

const displayPhone = phones => {
    const cardGrp = document.getElementById('card-grp');
    cardGrp.textContent = '';
    if (phones.length == 0) {
        const notFound = document.getElementById('not-found');
        notFound.style.display = 'block'
            // toggleNotFound('block');
            // console.log('not found')

        const head4 = document.createElement('h4');
        head4.innerText = 'Not Found';
        notFound.appendChild(head4);
        // console.log('phones');
        // document.getElementById('not-found').value = '';
    } else {
        const notFound = document.getElementById('not-found');
        notFound.style.display = 'none';
        phones.forEach(phone => {
            const cards = document.createElement('card');
            cards.classList.add('cards');
            cards.innerHTML = `
            <div class="card">
                    <img class="img-fluid w-50 mx-auto p-4" src="${phone.image}"alt="reload">
                    <div class="card-body">
                        <h5 class="card-title">Name: ${phone.phone_name}</h5>
                        <h5 class="card-title">Brand: ${phone.brand}</h5>
                        <p class="card-text">slug: ${phone.slug}.</p>
                    </div>
                    <button class="w-25 text-center mx-auto mb-3">Details</button>
                </div>
                
            `;
            cardGrp.appendChild(cards);

        })
    }

    toggleSpinner('none')
    toggleSerachResult('block');

    // console.log(phone);
}
loadPhoneData('iphone');