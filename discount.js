function ticketprice(ticketquantity){
    const first100rate = 100;
    const second100rate = 90;
    const restticketrate = 70;
    if( ticketquantity <= 100){
        const price = first100rate*ticketquantity;
        return price;

    } 

}
const price = ticketprice(20);
console.log(price);