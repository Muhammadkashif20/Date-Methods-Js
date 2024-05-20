// //Q1

// let now=new Date()
// alert(`Question 1 is: ${now}`)
// document.write('<br>')

// //Q2
// let month=now.getMonth()
// let monArr=['jan','feb','mar','apr','may','june','july','aug','sep','oct','nov','dec']
// console.log(monArr);
// alert('Current Month is: '+monArr[month])

// //Q3

// let day=now.getDay()
// let dayArr=['sun','mon','tue','wed','thu','fri','sat']
// alert('Today is: '+dayArr[day])

// //Q4

// let nows=new Date()
// let days=now.getDay()
// if(days=='0' || days=='6'){
//     alert(`Its fun day`)
// }
// else{
//     alert(`It's no fun day its a working day`)
// }

// //Q5

// let today=new Date()
// let dayss=now.getDate()
// if(dayss <=15){
//     alert('First Fifteen days of the month')
// }
// else{
//     alert('Last days of the month')
// }

// //Q6

// let nw=new Date();
// document.write(`Current Dates: ${nw} <br>`);

// let milisec=(nw/1000)
// let convert=Math.floor(milisec)
// document.write(`Elapsed Milisecond since january 1,1970: ${convert} <br>`)


// let mint=Math.floor(nw/1000*60)
// document.write(`Elapsed Minutes since january 1,1970: ${mint}`)



// //Q7

/* {
    let now=new Date()
    let hours=now.getHours()
    let ampm;
    console.log(hours);
    if(hours>12){
            console.log(ampm='Pm');
    }
    else{
            console.log(ampm='Am');
    }
}
 */


//Q8

let date=new Date('jan-18-2015')
// console.log(date);
let ramzanleft=date.getDate()
// console.log(ramzanleft);
let convert=date-ramzanleft
console.log(Math.floor(convert/(1000*3600*24)));










































//Q13

// let nws=new Date(prompt('Enter your Birth Date','jan-6-2000'))
// let convert=nws.getFullYear()
// document.write(`Your birth year is ${convert} <br>`)
// let Today=new Date()
// let age=Today-nws
// document.write('Your age is: '+Math.floor(age/(1000*3600*24)/365.25));


