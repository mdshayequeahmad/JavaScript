console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async () => {
    const promiseWifeBringingTicket = new Promise((resolve, reject) => {
        setTimeout(() => resolve('ticket'), 3000)
    })

    const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`)) 
    const getButter = new Promise((resolve, reject) => resolve(`butter`))
    const getColdDrinks = new Promise((resolve, reject) => resolve(`ColdDrinks`))

    let ticket = await promiseWifeBringingTicket

    console.log(`wife: i have the ${ticket}`);
    console.log('husband: we should go in')
    console.log('wife: no i am hungry');

    let popcorn = await getPopcorn;

    console.log(`husband: i got some ${popcorn}`);
    console.log('husband: we should go in')
    console.log('wife: i need butter on my popcorn');

    let butter = await getButter;

    console.log(`husband: i got some ${butter} on popcorn`);
    console.log(`husband: anythin else darling?`);
    console.log(`wife: lets go we are getting late`);
    console.log(`husband: thank you for the reminder *grins*`);

    let ColdDrinks = await getColdDrinks;

    console.log(`husband: i got some ${ColdDrinks}`);
    console.log(`husband: anythin else darling?`);
    console.log(`wife: lets go we are getting late`);
    console.log(`husband: thank you for the reminder *grins*`);


    return ticket;
}

preMovie().then((m) => console.log(`person3: shows ${m}`))

console.log('person4: shows ticket');
console.log('person5: shows ticket');