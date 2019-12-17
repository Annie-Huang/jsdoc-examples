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

/**
 * A Student
 * @typedef {Object} Student
 * @property {number} id - Student ID
 * @property {string} name - Student name
 * @property {string|number} [age] - Student age (optional)
 * @property {boolean} isActive - Student is active
 */

/**
 *
 * @type {Student}
 */
const student = {
    id: 1,
    name: 'John Doe',
    age: 20,
    isActive: true
};
















