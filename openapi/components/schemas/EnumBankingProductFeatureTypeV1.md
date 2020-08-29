
Each Product or Account has a set of Product Features. These are explained in a table as follows:

| Value | Description | Use of `additionalValue` Field
|-------|-------------|-------------------------------|
CARD_ACCESS | A card is available for the product to access funds | Text describing list of card types that this product can be linked to
ADDITIONAL_CARDS | Additional cards can be requested | The maximum number of additional cards. If no maximum then should be set to null
UNLIMITED_TXNS | Unlimited free transactions available | NA
FREE_TXNS | A set number of free transactions available per month | The number of free transactions
FREE_TXNS_ALLOWANCE | A set amount of transaction fee value that is discounted per month | The amount of transaction fee discounted (in AUD)
LOYALTY_PROGRAM | A points based loyalty program is available | Name of the loyalty program
OFFSET | An offset account can be connected to the product | NA
OVERDRAFT | An overdraft can be applied for | NA
REDRAW | Redraw of repaid principal above minimum required is available | NA
INSURANCE | Insurance is provided as an additional feature of the product | Text description of the type of insurance (e.g. Travel Insurance)
BALANCE_TRANSFERS | Balance transfers can be made to the account (eg. for credit cards) | NA
INTEREST_FREE | Interest free period for purchases | Interest free period. Formatted according to ISO 8601 Durations
INTEREST_FREE_TRANSFERS | Interest free period for balance transfers | Interest free period. Formatted according to ISO 8601 Durations
DIGITAL_WALLET | A Digital wallet can be attached to the product | The name or brand of the wallet
DIGITAL_BANKING | Access is available to online banking features for the product | NA
NPP_PAYID | An account of this product type can be used as the target of an NPP PayID | NA
NPP_ENABLED | An account of this product type can be used to receive funds as a result of a BSB/Number based NPP payment | NA
DONATE_INTEREST | Indicates that interest generated from the product can be automatically donated to a charity or community group | NA
BILL_PAYMENT | The product can be attached to an automatic budgeting and bill payment service | Optional name of the service
COMPLEMENTARY_PRODUCT_DISCOUNTS | Indicates that complementary, discounted offerings (such as gift cards, or discounted travel) is available | Description of the complementary offering
BONUS_REWARDS | Bonus loyalty rewards points are available | Number of points available
NOTIFICATIONS | Advanced notifications are available for the product | Description of the notification capability
OTHER | Another feature that can not be included in any of the other categories. The additionalInfo field is mandatory for this type | NA
