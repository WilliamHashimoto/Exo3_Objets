let francois = {
    panier: ["pain", "feta", "pommes", "salade"]
}

let sergio = {
    panier: ["courgettes", "gruyere", "couques", "radis"],
    derober() {
        let index = Math.ceil(Math.random()*francois.panier.length)-1;
        let index2 = Math.ceil(Math.random()*francois.panier.length)-1;
        while (index == index2) {
            index2 = Math.ceil(Math.random()*francois.panier.length)-1;
        }
        this.panier.unshift(francois.panier[index], francois.panier[index2]);

        francois.panier.splice(francois.panier.indexOf(sergio.panier[0]),1);
        francois.panier.splice(francois.panier.indexOf(sergio.panier[1]),1);
    }
}

console.log("Francois: " + francois.panier);
console.log("Sergio: " + sergio.panier);
sergio.derober();
console.log("sergio: " + sergio.panier);
console.log("Francois: " + francois.panier);
