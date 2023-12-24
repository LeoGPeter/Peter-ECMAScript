class ProductManager {
    constructor(){
        this.products = [];
    }

    static id = 0

    addProduct(title, description, price, img, code, stock){
        for(let i = 0; i < this.products.length; i++){
            if(this.products[i].code === code){
                console.log(`El codigo ${code} esta repetido`);
                break;
            }
        }

        const newProduct = {
            title, description, price, img, code, stock, id: ProductManager.id
        };

        if(!Object.values(newProduct).includes(undefined)){
            ProductManager.id++;
            this.products.push({
                ...newProduct,
                id: ProductManager.id,
            });
        }else{
            console.log("Todos los campos son requeridos")
        }
    }

    getProduct(){
        return this.products;
    }

    exist(id){
        return this.products.find((producto) => producto.id === id);
    }

    getProductById(id){
    !this.exist(id) ? console.log("Not Found") : console.log(this.exist(id));
    }
}

const productos = new ProductManager();

console.log(productos.getProduct());

productos.addProduct("titutlo1, descripcion1", 2500, "img1", "asd123", 3);
productos.addProduct("titutlo1, descripcion1", 2500, "img1", "asd456",);

productos.addProduct("titutlo1, descripcion1", 2500, "img1", "asd456", 6);

productos.getProductById(4)





 

