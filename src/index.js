// @ts-check

/**
 * Student Name
 * @type {string}
 */
const studentName = 'John Doe';

/**
 * Array of grades
 * @type {number[]}
 */
const grades = [98, 97.7, 76, 89];

/**
 * Todo object
 * @type {{id: number|string, text: string}}
 */
const todo = {
    id: "1",
    text: 'Hello'
};

/**
 * Calculate tax
 * @param {number} amount - Total amount
 * @param {number} tax - Tax percentage
 * @returns {string} - Total with a docllar sign
 */
const calculateTax = (amount, tax) => {
    return `$${amount + tax * amount}`;
};

// console.log(calculateTax(100, 0.1));
