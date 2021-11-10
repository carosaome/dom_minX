let page = document.getElementById('main');


function renderListProducts()
{
    page.innerHTML += `
    <div id="list-products">
        
    </div>
   `;
}

let list_products = 
[
    {
        img:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimgcomfort.com%2FUserfiles%2FUpload%2Fimages%2Fillustration-geiranger.jpg&imgrefurl=https%3A%2F%2Fimgcomfort.com%2Fas%2Fabout%2F&tbnid=oeg9uTQE6qdD8M&vet=12ahUKEwiO7-7ikov0AhVF25QKHespBF8QMygHegUIARC8AQ..i&docid=9CRvqENOLYj0SM&w=1168&h=600&q=img&ved=2ahUKEwiO7-7ikov0AhVF25QKHespBF8QMygHegUIARC8AQ',
        name: 'hi',
        price: '500d'
    }


]

function render_Products(){
    let listProduct = document.getElementById('list-products');

    for (let i = 0; i <list_products.length;i++){
        listProduct.innerHTML += `
        <div class="product">
        <a href="https://www.facebook.com/">
            <img src=" `+ list_products[i].img +`" alt="">
        
            <h4>`+ list_products[i].name +`</h4>
            <p>`+ list_products[i].price +`</p>
        </a>
        `
    }

    listProduct.innerHTML += `
            <div class="product">
            <a href="https://www.facebook.com/">
                <img src="./trih cong son.jpg" alt="">
            
                <h4>gio</h4>
                <p>7000D</p>
            </a>
        </div>
    `;
}    
   
renderListProducts();
render_Products();