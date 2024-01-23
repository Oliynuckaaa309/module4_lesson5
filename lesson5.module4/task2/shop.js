// const myModule=(function(){
//     let name='Cijdh';
//     let age=56;
//     function showAge(){
//         return age;
//     }
//     return{
//         userName:name,
//         age:showAge
//     }
// }())
// console.log(myModule)

//   export const myCoffee=(function Coffee(){
//     let water=1;
//     let milk=4;
//     let coffee=3;
//    function createCoffee(){

//     }
//     function checkWater(){
//         if(water<0.5){
//             console.log('error water')
//             return false;
//         }
//         return true;
//     }
//     function checkMilk(){
//         if(milk<0.5){
//             console.log('error milk')
//             return false;
//         }
//         return '8';
//     }

//     function check(){
//         if(coffee<0.5){
//             console.log('error coffee')
//             return false;
//         }
//         return true;
//     }

//     return{
//         isCoffee:createCoffee,
//         checkMilk:checkMilk,

//     }
// }());
export const shoppingModule=(function(){
    let balance=1000;
    let beer=70;
    let beerPrice=20;
    let wine=80;
    let winePrice=100;
    let pepsi=120;
    let pepsiPrice=35;
    let cart = []
    let priceList = []
    priceList['Пиво'] = 70
    priceList['Вино'] = 100
    priceList['Пепсі'] = 35
    let selection = ['Пиво', 'Вино', 'Пепсі']
    function getBalance(){
        return balance;
       
    }
    function getBeer(){
        return beer;
       
    }
    function getWine(){
        return wine;
       
    }
    function getPepsi(){
        return pepsi;
       
    }
    function getCart(){
        return cart;
    }
    function addProducts(count, beverageName){
        if(cart[beverageName]){
            cart[beverageName] = +cart[beverageName] + +count;
            return beverageName +':'+ cart[beverageName] +' '+'шт';
        } 
        else{
        cart[beverageName] = count;
        return beverageName +':'+ count+' '+'шт';
       
        }
        
      
    }
  
    function calculateSum(){
        let sum = 0;
        selection.filter(beverageName => cart[beverageName])
        .forEach(beverageName => {sum += cart[beverageName]*priceList[beverageName]
            console.log('beverageName: ' + beverageName + ' sum: ' + sum + ' count: ' + cart[beverageName] + ' price: ' + priceList[beverageName])
        })
        return sum;
        

    }
    function addToBalance(amount){
        balance += amount;
    }
   
    function removeBeer(count){
        
            beer-=count;
            console.log(count)
   
    }
    function removePepsi(count){
        pepsi-=count;
    }
    function removeWine(count){
        wine-=count;
    }
    function nullArray(){
        cart = [];
       
    }

    return{
        balance:getBalance,
        beer:getBeer,
        wine:getWine,
        pepsi: getPepsi,
        getCart: getCart,
        count:addProducts, 
        cart: cart,
        selection: selection,
        calculateSum: calculateSum,
        addToBalance: addToBalance,
        nullArray:nullArray,
        removeBeer:removeBeer,
        removeWine:removeWine,
        removePepsi:removePepsi
    }

}())