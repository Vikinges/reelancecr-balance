const account = [
    { month: 10, income: 150 },
    { month: 1, income: 200, expense: 50 },
    { month: 3, income: 450, expense: 200 },
    { month: 7, expense: 50 },
    { month: 2, income: 50 },
    { month: 5, income: 150, expense: 50 },
    { month: 9, income: 700, expense: 400 },
    { month: 4, income: 10, expense: 300 },
    { month: 6, expense: 50 },
    { month: 11, income: 150, expense: 30 },
    { month: 8, income: 450, expense: 120 },
    { month: 12, expense: 200 }
];

const months = ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Geguze', 'Birzelis', 'Liepa', 'Rugpjutis', 'Rugsejis', 'Spalis', 'Lapkritis', 'Gruodis']
let table = document.querySelector('.table-content');

console.log(table);
console.log(account.length);

let HTML = '';

var sumIncome=0;
let sumExpense = 0; 
function get(elemement) {
  for (let i=0; i<elemement.length; i++) {
     HTML += `<div class="table-row">
                <div class="cell">${[i+1]}</div>
                <div class="cell">${months[i]}</div>
                <div class="cell">${account[i].income || 0}</div>
                <div class="cell">${account[i].expense || 0}</div> 
                <div class="cell">${(account[i].income || 0) - (account[i].expense || 0) }</div>
            </div>`;
    sumExpense += account[i].expense || 0;
    sumIncome += account[i].income || 0;
   
    
  }
        // work with amount summ expense and income 
        let TableSum = document.querySelector('.table-footer'); //  get place
        let HTMLSumm = '';
        HTMLSumm += `<div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell">${sumExpense} Eur</div>
        <div class="cell">${sumIncome} Eur</div>`;
        TableSum.innerHTML = HTMLSumm;  // we send to html
}

 get(months); 

  function sum(elem, ) {
    for (let a=0; a<elem.length; a++) {
     HTML += `<div class="table-footer">
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell">0.00 Eur</div>
            <div class="cell"></div>
        </div>`;
    }
  }

table.innerHTML = HTML;