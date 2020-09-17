
Each Product or Account has a set of Discount Types types. These are explained in a table as follows:

| Value | Description | Use of `additionalValue` Field
|-------|-------------|-------------------------------|
BALANCE | Discount on a fee for maintaining a set balance. As the discount applies to a fee the period is the same as for the fee | The minimum balance in AmountString format
DEPOSITS | Discount for depositing a certain amount of money in a period. As the discount applies to a fee the period is the same as for the fee | The minimum deposit amount in AmountString format
PAYMENTS | Discount for outbound payments from the account under a certain amount of money in a period. As the discount applies to a fee the period is the same as for the fee | The payment threshold amount in AmountString format
FEE_CAP | The amount, balanceRate, transactionRate, accruedRate or feeRate fields of the discount represent the maximum amount charged in a time period | The time period for which the fee cap applies. Formatted according to ISO 8601 Durations
ELIGIBILITY_ONLY | Discount applies based on customer eligibility (eligibility array must be populated) | N/A
