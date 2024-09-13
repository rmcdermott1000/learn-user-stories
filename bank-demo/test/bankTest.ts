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
    console.log('story 1 scenario 1 failed')
}

// scenario 2
try{
    bank.createAccount('John', 25, '123456789');
    console.log('story 1 scenario 2 failed')
}
catch(e){
    console.log('story 1 scenario 2 passed')
}

// Story #2
// scenario 1
bank.deposit('123456789', 100);
if (acc && acc.balance === 100) {
    console.log('story 2 scenario 1 passed')
}
else{
    console.log('story 2 scenario 1 failed')
}

// scenario 2
try{
    bank.deposit('i will fail', 100);
    console.log('story 2 scenario 2 failed')
}
catch(e){
    console.log('story 2 scenario 2 passed')
}

// Story #3
// scenario 1
bank.withdraw('123456789', 50);
if (acc && acc.balance === 50) {
    console.log('story 3 scenario 1 passed')
}
else{
    console.log('story 3 scenario 1 failed')
}

// scenario 2
try{
    bank.withdraw('123456789', 100);
    console.log('story 3 scenario 2 failed')
}
catch(e){
    console.log('story 3 scenario 2 passed')
}

// scenario 3
try{
    bank.withdraw('i will fail', 100);
    console.log('story 3 scenario 3 failed')
}
catch(e){
    console.log('story 3 scenario 3 passed')
}

// Story #4
// scenario 1
const balance = bank.viewBalance('123456789');
if (balance === 50) {
    console.log('story 4 scenario 1 passed')
}
else{
    console.log('story 4 scenario 1 failed')
}

// scenario 2
try{
    bank.viewBalance('i will fail');
    console.log('story 4 scenario 2 failed')
}
catch(e){
    console.log('story 4 scenario 2 passed')
}
