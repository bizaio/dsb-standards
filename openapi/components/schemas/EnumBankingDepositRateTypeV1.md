
The type of rate (base, bonus, etc). These are explained in a table as follows:

| Value | Description | Use of `additionalValue` Field
|-------|-------------|-------------------------------|
FIXED | Fixed rate for a period of time | The period of time fixed. Formatted according to ISO 8601 Durations
BONUS | A bonus rate available by meeting a specific criteria | A description of the criteria to obtain the bonus
BUNDLE_BONUS | A bonus rate obtained by originating a bundle instead of a standalone product | The name of the bundle
VARIABLE | A variable base rate for the product | NA
INTRODUCTORY | An introductory bonus that will expire after a set period | The period of time for the introductory rate. Formatted according to ISO 8601 Durations
FLOATING | A floating rate is relatively fixed but still adjusts under specific circumstances | Details of the float parameters
MARKET_LINKED | A rate that is linked to a specific market, commodity or asset class | Details of the market linkage
