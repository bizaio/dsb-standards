
Each Product or Account has a set of Product Eligibility types. These are explained in a table as follows:

| Value | Description | Use of `additionalValue` Field
|-------|-------------|-------------------------------|
BUSINESS | Only business may apply for the account | NA
PENSION_RECIPIENT | A recipient of a government pension may apply for the product | NA
MIN_AGE | Only customers older than a minimum age may apply | The minimum age in years
MAX_AGE | Only customers younger than a maximum age may apply | The maximum age in years
MIN_INCOME | The customer must have an income greater than a specified threshold to obtain the product | Minimum income in AmountString format
MIN_TURNOVER | Only a business with greater than a minimum turnover may apply | Minimum turnover in AmountString format
STAFF | Only a staff member of the provider may apply | NA
STUDENT | Only students may apply for the product | NA
EMPLOYMENT_STATUS | An eligibility constraint based on employment status applies | A description of the status required
RESIDENCY_STATUS | An eligibility constraint based on residency status applies | A description of the status required
NATURAL_PERSON | The customer must be a natural person rather than another legal entity | NA
OTHER | Another eligibility criteria exists as described in the additionalInfo field (if this option is specified then the additionalInfo field is mandatory) | NA
