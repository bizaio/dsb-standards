
Each Product or Account has a set of Discount Eligibility Types types. These are explained in a table as follows:

| Value | Description | Use of `additionalValue` Field
|-------|-------------|-------------------------------|
BUSINESS | A business or other non-person legal entity | NA
PENSION_RECIPIENT | A recipient of a government pension may receive the discount | Optional. Should contain a description of which pensions qualify
MIN_AGE | Only customers older than a minimum age receive the discount | The minimum age in years
MAX_AGE | Only customers younger than a maximum age receive the discount | The maximum age in years
MIN_INCOME | The customer must have an income greater than a specified threshold to obtain the discount | Minimum income in AmountString format
MIN_TURNOVER | Only a business with greater than a minimum turnover is eligible | Minimum turnover in AmountString format
STAFF | Only a staff member of the provider may receive the discount | NA
STUDENT | Only students may receive the discount | Optional. Should contain a description of who qualifies as a student, e.g. do apprentices qualify?
EMPLOYMENT_STATUS | An eligibility constraint based on employment status applies | A description of the status required
RESIDENCY_STATUS | An eligibility constraint based on residency status applies | A description of the status required
NATURAL_PERSON | The customer must be a natural person rather than another legal entity | NA
INTRODUCTORY | The discount is only available during an introductory period | The period of time for the introductory discount. Formatted according to ISO 8601 Durations
OTHER | Another eligibility criteria exists as described in the additionalInfo field (if this option is specified then the additionalInfo field is mandatory) | NA
