

function mostrarCarros(){
    fetch("http://10.92.199.53:3000/carros")
    .then ((resp) => resp.json()) 
    .then ((data) => { 


        let div = document.getElementById("cardsCarro")

        data.forEach(carro => {

            let cardCarro = document.createElement("div")
            
            cardCarro.innerHTML = `
            <div class ="card" >
                <img src ="${carro.imagem}" />
                <h1>${carro.nome} </h1>
                <p>${carro.preco}</p>
                <button class ="Comprar"> Comprar </button>
            </div>
            `


            div.append(cardCarro)
            
        });

    });
}


mostrarCarros()





function mostrarMotos(){

    fetch("http://10.92.199.53:3000/motos")
    .then ((resp) => resp.json()) 
    .then ((data) => { 


        let div = document.getElementById("cardMoto")

        data.forEach(motos => {

            let cardsMoto = document.createElement("div")
            
            cardsMoto.innerHTML = `
            <div class ="card">
                <img src ="${motos.imagem}" />
                <h1>${motos.nome} </h1>
                <p>${motos.preco}</p>
                <button class ="Comprar"> Comprar </button>
            </div>
            `


            div.append(cardsMoto)
            
        });

    });

}

mostrarMotos()



function mostrarVendedores(){
    fetch("http://10.92.199.53:3000/vendedores")
    .then ((resp) => resp.json()) 
    .then ((data) => { 

        let div = document.getElementById("vendedores")

        data.forEach(vendedores => {

            let cardsVendedores = document.createElement("div")
            
            cardsVendedores.innerHTML = `
            <div class ="cardVendedores">
                <img src ="${vendedores.imagem}" />
                <h1>${vendedores.nome} </h1>
            </div>
            `

            div.append(cardsVendedores)
            
        });

    });

}

mostrarVendedores()