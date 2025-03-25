let rating = prompt("Enter rating: ");

switch(rating){
    case 'A':
        console.log("Excellent");
        break;
    case 'B':
        console.log("Best");
        break;
    case 'C':
        console.log("Good");
        break;
    case 'D':
        console.log("Avergae");
        break;
    case 'E':
        console.log("Poor");
        break;
    default:
        console.log('Invalid');  
}