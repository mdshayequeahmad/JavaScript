

async function dadmakespromise(){

    const dadspromise = await new Promise((resolve, reject) => {
        new setTimeout(() => {
            //after 10 days
            var salaryCredited = true;
            var salary = 100000;
            var costofps5 = 40000;
            var costofps4 = 30000;
            if (salaryCredited === true && salary > costofps5){
                resolve('buy him a ps3')
            } else if (salaryCredited === true && salary > costofps4) {
                reject('buy him a ps4')
            } else {
                reject('sorry son i will try next month')
            }
        }, 1000)
    })

    console.log(dadspromise);
}

dadmakespromise();

