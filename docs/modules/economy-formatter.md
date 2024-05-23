# Economy Formatter

QuickShop uses the Economy Formatter to format account balances to human readable text.

## Economy plugins - The Default

By default, QuickShop will request that your installed economy plugin formats the balance, but sometimes it this may not work. (E.g., Eco plugin author returns a null.) If the economy plugin cannot format the balance, then QuickShop will fallback to internal economy formatter to determine how the balance should be formatted.

## Internal Formatter - The Backup

Internal formatter only will be used when the economy plugin's formatter doesn't work. However, you can force enable it by changing the following settings in config.yml:

```yaml
  #This should fix Vault or an economy plugin incorrectly processing the price and returning a "0" result.
  #If you enable this setting, then QS will force use the "alternate-currency-symbol".
  disable-vault-format: false
```

Use these options to customize it:

```yaml
#Whether to use decimal format to display money.
use-decimal-format: false
#The decimal format to display money in.
#The default is #,###.##
decimal-format: "#,###.##"
shop:
  #If vault doesn't return a currency symbol, QuickShop will use this symbol.
  alternate-currency-symbol: '$'
  #If the currency symbol should be displayed on the right side (eg 1234$).
  #By default, it is on the left side (eg $1234).
  #Only works when disable-vault-format is true.
  currency-symbol-on-right: false
  #The maximum number of digits after the decimal.
  #Set this to -1 to disable it. (Unlimited maximum digits)
  maximum-digits-in-price: -1
```
