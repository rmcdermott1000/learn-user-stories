// This is a type for all bank accounts in the bank
interface BankAccount {
    name: string;
    age: number;
    accountNumber: string;
    balance: number;
}

/**
 * This class represents a simple bank with the ability to create new accounts
 */

export default class Bank {

    // this is the list of bank accounts
    private accounts: BankAccount[] = [];

    /**
     * 
     * This method checks if the account already exists
     * 
     * @param {string} accountNumber the account number
     * @returns {boolean|undefined} The account if it exsists, otherwise undefined
     */
    private isAccountExists(accountNumber: string): boolean {
        return this.accounts.some(account => account.accountNumber === accountNumber);
    }

    /**
     * 
     * This method returns the account with the given account number if it exists.
     * 
     * @param {string} accountNumber the account number
     * @returns {BankAccount | undefined} The account if it exsists, otherwise undefined
     */
    private getAccount(accountNumber: string): BankAccount | undefined {
        return this.accounts.find(account => account.accountNumber === accountNumber);
    }

    /**
     *  
     * This method creates a new bank account with the given name, age and account number.
     * 
     * @param {string} name the name of the account holder
     * @param {number} age the age of the account holder
     * @param {string} accountNumber the account number
     * @returns {BankAccount | undefined} The account if it was created, otherwise undefined
     */
    public createAccount(name: string, age: number, accountNumber: string): BankAccount | undefined{

        const isAccExists = this.isAccountExists(accountNumber);

        if (isAccExists) {
            throw new Error('Account already exists');
        }

        const account: BankAccount = {
            name,
            age,
            accountNumber,
            balance: 0
        };

        this.accounts.push(account);
        return account;
    }

    public deposit(accountNumber: string, amount: number): undefined {

        const account = this.getAccount(accountNumber);
        if (account) {
            account.balance += amount;
            return;
        }

        throw new Error('Account not found');
    }
}