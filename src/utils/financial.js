/**
 * Shared financial utility functions.
 * Reused across EmiCalculator, ApplyOffers, and any future financial components.
 */

/**
 * Calculate Equated Monthly Installment (EMI) using the standard formula:
 *   EMI = P × r × (1 + r)^n / ((1 + r)^n - 1)
 *
 * @param {number} principal - Loan principal amount in INR
 * @param {number} annualRate - Annual interest rate as a percentage (e.g., 12 for 12%)
 * @param {number} tenureMonths - Loan tenure in months
 * @returns {number} Monthly EMI amount (unrounded)
 */
export function calculateEMI(principal, annualRate, tenureMonths) {
  if (principal <= 0 || tenureMonths <= 0) return 0;
  const r = annualRate / 12 / 100;
  if (r === 0) return principal / tenureMonths;
  return (principal * r * Math.pow(1 + r, tenureMonths)) / (Math.pow(1 + r, tenureMonths) - 1);
}

/**
 * Format a number as Indian Rupees (INR).
 * @param {number} value - The amount to format
 * @returns {string} Formatted currency string (e.g., "₹3,00,000")
 */
export function formatINR(value) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value);
}
