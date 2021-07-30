class AddEditDel {
    id;
    name;

    constructor(id,name) {
        this.id = id;
        this.name = name;
    }
    getId(){
        return this.id = id;
    }
    setId(id){
        this.id = id;
    }
    getName(){
        return this.name = name;
    }
    setName(name){
        this.name = name;
    }
}
let arrrProduct = new Array();
arrrProduct.push(new AddEditDel(1,"ChirashiSushi"));
arrrProduct.push(new AddEditDel(2,"GunkanSushi"));
arrrProduct.push(new AddEditDel(3,"Makimono"));
arrrProduct.push(new AddEditDel(4,"NigiriSushi"));
arrrProduct.push(new AddEditDel(5,"OshiSushi"));
arrrProduct.push(new AddEditDel(5,"TemakiSushi"));
