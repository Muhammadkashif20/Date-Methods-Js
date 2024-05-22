// //Q1

let now=new Date()
alert(`Question 1 is: ${now}`)
document.write('<br>')

//Q2

let month=now.getMonth()
let monArr=['jan','feb','mar','apr','may','june','july','aug','sep','oct','nov','dec']
console.log(monArr);
alert('Current Month is: '+monArr[month])

//Q3

let day=now.getDay()
let dayArr=['sun','mon','tue','wed','thu','fri','sat']
alert('Today is: '+dayArr[day])

//Q4


let nows=new Date()
let days=now.getDay()
if(days=='0' || days=='6'){
    alert(`Its fun day`)
}
else{
    alert(`It's no fun day its a working day`)
}

//Q5

{
let today=new Date()
let dayss=now.getDate()
if(dayss <=15){
    alert('First Fifteen days of the month')
}
else{
    alert('Last days of the month')
}
}
//Q6
{
let nw=new Date();
document.write(`Current Dates: ${nw} <br>`);

let milisec=(nw/1000)
let convert=Math.floor(milisec)
document.write(`Elapsed Milisecond since january 1,1970: ${convert} <br>`)


let mint=Math.floor(nw/1000*60)
document.write(`Elapsed Minutes since january 1,1970: ${mint}`)
}


//Q7

{
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

// Q8

{
  let now=new Date('31-decemeber-2020')
  document.write(`Later Date: ${now}`)
}

//Q9
{
let date=new Date('jan-18-2015')
// console.log(date);
let ramzanleft=date.getDate()
// console.log(ramzanleft);
let convert=date-ramzanleft
console.log(Math.floor(convert/(1000*3600*24)));
}
//Q10

{
let now=new Date()
console.log(now);
let since=new Date('2015')
console.log(since);
let seconds=since.getSeconds()
console.log(seconds);
let convert=now-since
// console.log(convert);
let convSec=Math.floor(convert/(1000));
document.write(`On reference date ${now}.<br>${convSec}  seconds had passed since beginning of 2015` )
}

//Q11

{
        let now=new Date() 
        let agoHour=new Date()
        let ago=agoHour.getHours()
        let convert=ago-1
        console.log(convert);
        let copy=now.toString()
        let control=copy.slice(0,15)
        let control1=copy.slice(18)
        document.write(`Current date: ${now}<br> 1 Hour ago, it was ${control} ${convert}${control1}` )
}

//Q12

{
        let now=new Date() 
        let year=new Date()
        let Years=year.getFullYear()
        let convert=Years-100
        let arr=['sun','mon','tue','wed','thur','Fri','sat']
        let days=new Date('5-dec-1924')
        let search=days.getDay()
        let system=arr[search]
        let copy=now.toString()
        let control=copy.slice(3,10)
        let control1=copy.slice(15)
        document.write(`Current date: ${now}<br> 100 Years back, it was ${system} ${control} ${convert}${control1}` ) 
}


//Q13

{
   let birthYear=new Date(prompt('Enter your Birth Year'));
   let convert=birthYear.getFullYear()
   document.write(`Your Age is: ${convert} <br>`)
   let now=new Date()
   let convert1=now-birthYear;
   document.write('Your Birth year is: '+Math.floor(convert1/(1000*3600*24)/365.25))
       
   
}

//Q14
{
document.write('<h1>K-Electric Bill</h1>')
let customerName=(prompt('KE Bill Info:- Enter your Name'));
document.write(`Customer Name: ${customerName} <br>`)
let now=new Date()
let currMon=now.getMonth()
let months=['jan','feb','mar','apr','May','june','july','aug','sep','oct','nov','dec']
document.write('Current Month is: '+months[currMon]+'<br>')
let units=prompt('enter your Units please enter only digits');
document.write(`Numbers of Units: ${units} <br>`);
let charges=16
document.write(`Charges per unit: ${charges} <br>`)
let netAmount=charges*units;
document.write(`Net Amount Payable (within Due Date): ${netAmount} <br>`)
let latePayment=350;
document.write(`Late payment surcharge: ${latePayment} <br>`);

let groosAmountPay=latePayment+netAmount;
document.write(`Gross Amount Payable (after Due Date): ${groosAmountPay}`)
}

