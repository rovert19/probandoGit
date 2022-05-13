let $body = document.querySelector('body')
let $ul = document.querySelector('ul');

const ingredientes = ['Arroz', 'Maicena', 'Queso',
                      'Cebolla', 'Tomate']
                      
ingredientes.map((ingrediente) => {
  let $li = document.createElement('li');
  $li.textContent = ingrediente;
  $ul.appendChild($li);
})

function agregarIngrediente() {
  const ingred = prompt('Ingrese un ingrediente ')
  if (ingred){
    ingredientes.push(ingred);
    let $li = document.createElement('li');
    $li.textContent = ingred;
    $ul.appendChild($li);
    setTimeout(() => alert(`Se acaba de agregar el ingrediente ${ingred}`), 1000);
  }
  
}

function eliminarIngrediente() {
  let ingredDelete = prompt('Ingrese el ingrediente a eliminar ');
  ingredDelete = ingredDelete.toLowerCase()
  ingredDelete = ingredDelete.
  slice(0,1).toUpperCase() + ingredDelete.
  slice(1)
  
  const listaIngrediente = document.querySelectorAll('li');
  
  for (let ingredienteTag of listaIngrediente) {
    if (ingredDelete === ingredienteTag.textContent) {
      $ul.removeChild(ingredienteTag)
      console.log(`Se elimina ${ingredDelete}`)
    }
  }

  if (!(ingredientes.includes(ingredDelete))){
     alert('Ese ingrediente no existe');
  }
}


          