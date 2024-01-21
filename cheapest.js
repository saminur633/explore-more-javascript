const phone =[
    { name: 'realme',Storage: '32gb',camera :12, color: 'silver',price: 15000},

    { name: 'walton',Storage: '32gb', camera: 10 , color : 'white', price : 19000},

    { name: 'samsung',Storage: '32gb',camera :16, color: 'black',price: 22000},

    { name: 'redme',Storage: '32gb',camera :18, color: 'green',price: 25000},
];
function cheapestPhone(phones){
    let cheapest = phones[0];
    for( let i=0; i< phones.length; i++){
        const phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest =  phone;
        }

    }
    return cheapest;
}
const myselection = cheapestPhone(phone);
console.log(myselection);