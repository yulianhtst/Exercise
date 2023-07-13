async function getInfo() {
    let stopId = document.getElementById('stopId').value;
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`
    const stopNameEl = document.getElementById('stopName');
    const timeTambleEl = document.getElementById('buses');

try{
    stopNameEl.textContent='Loading.....';
    timeTambleEl.replaceChildren();
    const res=await fetch(url);


    if(res.status!==200){
        throw new Error('Stop Invalid ID')
    }
    const data =await res.json();

    stopNameEl.textContent=data.name;


    Object.entries(data.buses).forEach(b=>{
        const liElement=document.createElement('li');
        liElement.textContent=`Bus ID ${b[0]} arrives in ${b[1]} minutes`;
        timeTambleEl.appendChild(liElement);
    })
}catch(error){
    stopNameEl.textContent='ERROR';
}

//=============================Fetch/then====================================================//
    // try {
    //     timeTambleEl.replaceChildren();
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => {
    //             stopNameEl.textContent = data.name
    //             Object.entries(data.buses).forEach(x => {
    //                 const liElement = document.createElement('li');
    //                 liElement.textContent = `Bus ID ${x[0]} arrives in ${x[1]} minutes`
    //                 timeTambleEl.appendChild(liElement)
    //             });
    //         })

    // } catch (error) {
    //     console.log(error);
    // }
}