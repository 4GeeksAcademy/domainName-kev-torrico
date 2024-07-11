let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extensions = ['.com','.net','.us','.io']

// pronoun.forEach(pronombre =>{
//     adj.forEach(adjetivo => {
//         noun.forEach(sujeto => {
//             extensions.forEach(extension => {
//                 console.log(`${pronombre}${adjetivo}${sujeto}${extension}`)
//             })
//         })
//     })
// })


//For taking out the last two letters of each element I used chatgpt to help me..
function createDomains() {
    let domains = [];                                                                              //Here I create an empty erray called domains

    pronoun.forEach(pronombre => {
        adj.forEach(adjetivo => {
            noun.forEach(sujeto => {
                let lastTwoLetters = sujeto.slice(-2);                                             //I eliminate the last two letters of each sujeto and store them in a variable called lastTwoLetters
                let restOfString = sujeto.slice(0, -2);                                            //I get the rest of letters that were left and store them into the variable restOfString
                let domain = `${pronombre}${adjetivo}${restOfString}.${lastTwoLetters}`;           //I concatinate all of the elements but adding a period before putting the lastTwoLetters
                domains.push(domain);                                                              //I add all the domains that were generated to my array called domains
            });
        });
    });

    return domains;
}
let domainList = createDomains();                                                                   //I just call the function and store the result
console.log(domainList);                                                                            // This one will be the output
