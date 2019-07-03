module.exports = function makeExchange(currency) {
    if(currency <= 0) return {}
    if(currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"}

    let moneyObj = {}

    for(let i = 0; i < 5; i++) {
        let divider, coinType;
        switch(i) {
            case 0:
                divider = 50
                coinType = 'H'
                break
            case 1:
                divider = 25
                coinType = 'Q'
                break    
            case 2:
                divider = 10
                coinType = 'D'
                break
            case 3:
                divider = 5
                coinType = 'N'
                break
            case 4:
                divider = 1
                coinType = 'P'
                break         
        }
        if(parseInt(currency % divider) > 0 ) {

            if(parseInt(currency / divider) !== 0) moneyObj[coinType] = parseInt(currency / divider)
            currency = currency - (divider * parseInt(currency / divider))
  
        }else if(parseInt(currency % divider) === 0){
            moneyObj[coinType] = currency / divider
            break

        }else { continue }
   
    }
    return moneyObj
    
    








}
