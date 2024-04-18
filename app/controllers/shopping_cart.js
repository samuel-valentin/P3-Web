class ShoppingCart{

    constructor(products){
    this.proxies = []
    this.products = products;
    }
    addItem(productUUid,amount){
        if(this.proxies.find(element => productUUid === element.UUID) === undefined){
            this.proxies.push(new ProductProxy(productUUid,amount));
        }
        else{
            let index = this.proxies.findIndex(element => productUUid === element.UUID);
            this.proxies[index].Quantity += amount;
        }
    }
    updateItem(productUuid,newAmount){
        if (newAmount < 0) {
            throw new ShoppingCartException("New amount cannot be negative");
        }
        const existingProduct = this.proxies.find(element => productUuid === element.UUID);

        if (existingProduct === undefined) {
            throw new ShoppingCartException("The product is not in the shopping cart");
        } else if (newAmount === 0) {
            this.removeItem(productUuid);
        } else {
            let index = this.proxies.findIndex(element => productUuid === element.UUID);
            this.proxies[index].Quantity = newAmount;
        }
    }
    removeItem(productUUid){
        if(this.proxies.find(element => productUUid === element.UUID) === undefined){
            throw new ShoppingCartException("The product is not in the shopping cart");
        }
        else{
            let index = this.proxies.findIndex(element => productUUid === element.UUID);
            this.products.splice(index,1);
            this.proxies.splice(index,1);
        }    
        
    }
    CalculateTotal(){
        let total = 0;
        let product = null;
        for(let i = 0 ; i < this.proxies.length; i++){
            console.log("Total de articulos: ",this.proxies.length);
            product = this.products.find(element => element._uuid === this.proxies[i].UUID);
            total += product._pricePerUnit * this.proxies[i].Quantity;
        }
        return total;
    }

}
class ProductProxy{
    constructor(UUID,Quantity){
        this.UUID = UUID;
        this.Quantity = Quantity;
    }
}

class ShoppingCartException{
    constructor(message){
        this.message = message;
    }
}