
The type of rate (base, bonus, etc). These are explained in a table as follows:

| Value | Description | Use of `additionalValue` Field
|-------|-------------|-------------------------------|
FIXED | Fixed rate for a period of time | The period of time fixed. Formatted according to ISO 8601 Durations
VARIABLE | A variable base rate for the product | NA
INTRODUCTORY | An introductory discount that will expire after a set period | The period of time for the introductory rate. Formatted according to ISO 8601 Durations
DISCOUNT | A specific discount rate that may be applied. A discount rate reduces the interest payable | Description of the discount rate that is applicable
PENALTY | A specific penalty rate that may be applied. A penalty rate increases the interest payable | Description of the penalty rate that is applicable
FLOATING | A floating rate is relatively fixed but still adjusts under specific circumstances | Details of the float parameters
MARKET_LINKED | A rate that is linked to a specific market, commodity or asset class | Details of the market linkage
CASH_ADVANCE | Specific rate applied to cash advances from the account | NA
PURCHASE | Specific rate applied to purchases from the account | NA
BUNDLE_DISCOUNT_FIXED | A discount rate off the fixed rate obtained by originating a bundle instead of a standalone product | The name of the bundle
BUNDLE_DISCOUNT_VARIABLE | A discount rate off the variable rate obtained by originating a bundle instead of a standalone product | The name of the bundle
