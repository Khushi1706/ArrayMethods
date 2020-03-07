const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
// For each takes a callback function as parameter and calls the function each time for every element to perform a specific action.

//   companies.forEach(function(element){
//      console.log(element.category);
//   })
//Shorter syntax : 
companies.forEach(company=>console.log(company.category));
companies.forEach(company=>console.log(company.name));
companies.forEach(company=>{
    console.log(`company start date : ${company.start}`);
})

//Filter

/* Filter takes a callback function as parameter and returns true if the condition inside the function is met.
   It returns a new array with all elements passing the specified condition
 */
const newGen = companies.filter(company=>{
    if(company.start>2000) return true;
})

console.log(newGen);

const retailers = companies.filter(company=>{
    if(company.category === 'Retail') return true;
})

console.log(retailers);

const eightiesCompanies = companies.filter(company => 
    {
        if(company.start >= 1980 && company.start <1990)
         return true;
    }
    ) 
    console.log(eightiesCompanies);

//Using longer syntax

const majors = ages.filter(function(age){
    if(age>21){
        return true;
    }
})
console.log(majors);

//companies that lasted 10 or more years 
const bigwigs = companies.filter(company =>{
     if(company.end - company.start >= 10) return true;
})
console.log(bigwigs);

/* Map iterates over the array and returns a new array by performing operations on each element. We can chain map calls to perform powerful mathematical operations */

const doubleAges = ages.map(age=>age*2);
console.log(doubleAges);

const testMap = companies.map(company =>{
    console.log(`company name : ${company.name} company start date : ${company.start} - company end date : ${company.end}`)
})
// Chaining the results of map
const ageMap = ages
.map(age=>age*2)
.map(age=>age+10);
console.log(ageMap);
console.log(ages);

/*Sort function 
If compareFunction(a, b) returns less than 0, sort a to an index lower than b (i.e. a comes first).
If compareFunction(a, b) returns 0, leave a and b unchanged with respect to each other, but sorted with respect to all different elements. Note: the ECMAscript standard does not guarantee this behavior, thus, not all browsers (e.g. Mozilla versions dating back to at least 2003) respect this.
If compareFunction(a, b) returns greater than 0, sort b to an index lower than a (i.e. b comes first).
compareFunction(a, b) must always return the same value when given a specific pair of elements a and b as its two arguments. If inconsistent results are returned, then the sort order is undefined.
*/
const sortedCompanies = companies.sort((c1,c2)=>(c1.start > c2.start ? 1: -1))
//companies.sort((a, b) => (a.start > b.start ? 1 : -1));
console.log(sortedCompanies);

const sortedAges = ages.sort((a,b)=>a-b);
console.log(sortedAges);

const obj = [
    {
        x: 5,
        y: 12
    },
    {
        x:6,
        y:11
    }
]

const compare = (a,b)=> b.y-a.y;
// sorting with respect to y 
console.log(obj.sort(compare));


/* reduce : Takes a callback function with 4 parameters and reduces the array into a single value */

const totalAges = ages.reduce((total,age)=>total+age);
console.log(totalAges);

const store = {
    sunglasses: {
      inventory: 817, 
      cost: 9.99
    },
    pants: {
      inventory: 236, 
      cost: 7.99
    },
    bags: {
      inventory: 17, 
      cost: 12.99
    }
  };
  const order = {
    items: [['sunglasses', 1], ['bags', 2]],
    giftcardBalance: 79.82
  };
  const itemsArr = order.items;
  let inStock = itemsArr.filter(item => store[item[0]].inventory >= item[1]);
  console.log(inStock);



