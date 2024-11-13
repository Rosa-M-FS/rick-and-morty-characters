const pag =document.getElementById("pagination");
const ppage =document.getElementById("prev-page");
const npage =document.getElementById("next-page");
const listPersonajes =document.getElementById("character-list");
let numPag=1;
npage.addEventListener('click', () => {
    if(numPag>=1){
        numPag++;
        cargaPagina()
    } 
  });

ppage.addEventListener('click', () => {
    if(numPag>1){
        numPag--;
        cargaPagina();
    } 
  });
  function cargaPagina(){
    fetch(`https://rickandmortyapi.com/api/character/?page=${numPag}`)
    .then((Response) => {
      if (!Response.ok) {
        throw new Error('Error de solicitud');
      }
      return Response.json();
    })
    .then((data) => {
        listPersonajes.replaceChildren();
        data.results.forEach(personajes => {
            const personaje=document.createElement("li");
            
            const img = document.createElement("img");
            img.src = personajes.image;
            img.alt = personajes.name;
            
            const h3 = document.createElement("h3");
            h3.textContent = personajes.name;
            
            const p = document.createElement("p");
            p.textContent =personajes.species;
            //añadir elementos a cada personaje
            personaje.appendChild(img);
            personaje.appendChild(h3);
            personaje.appendChild(p);
            //añadir personaje a la lista
            listPersonajes.appendChild(personaje);
            
        });    
    })
    .catch((error) => {
      chiste.innerText = 'Error al cargar personajes';
    });
}
cargaPagina();