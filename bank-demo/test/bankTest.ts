import Bank from '../src/bank';

// to run: 'npx ts-node bankTest.ts'

// Story #1
// scenario 1
const bank = new Bank();
const acc = bank.createAccount('John', 25, '123456789');

if (acc && acc.accountNumber === '123456789') {
    console.log('scenario 1 passed')
}
else{
    console.log('scenario 1 failed')
}

// scenario 2
try{
    bank.createAccount('John', 25, '123456789');
    console.log('scenario 2 failed')
}
catch(e){
    console.log('scenario 2 passed')
}

// Story #2
// scenario 1
bank.deposit('123456789', 100);
if (acc && acc.balance === 100) {
    console.log('scenario 1 passed')
}
else{
    console.log('scenario 1 failed')
}

// scenario 2
try{
    bank.deposit('i will fail', 100);
    console.log('scenario 2 failed')
}
catch(e){
    console.log('scenario 2 passed')
}