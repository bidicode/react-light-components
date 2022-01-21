export interface CurrencyOptions {
  locale: string;
  currency: string;
}

export interface FormatCurrencyOptions extends CurrencyOptions {
  useGrouping?: boolean;
}

function getDefaultLocale(): string {
  return navigator.language || 'en-us';
}

function getLocale(options: CurrencyOptions): string {
  return options.locale || getDefaultLocale();
}

function getDigits(value: string): string {
  return value.replace(/[^0-9]/g, '').replace(/^0+/, '');
}

function getAmount(value: string): number {
  let amount;
  const digits = getDigits(value);
  if (digits.length === 2) {
    amount = `0.${digits}`;
  } else if (digits.length === 1) {
    amount = `0.0${digits}`;
  } else if (digits.length <= 0) {
    amount = '0.00';
  } else {
    const integer = digits.substring(0, digits.length - 2);
    const decimal = digits.substring(digits.length - 2);
    amount = `${integer}.${decimal}`;
  }
  return parseFloat(amount);
}

export function formatCurrency(value: string, options: FormatCurrencyOptions): string {
  if (!value) { return; }

  const amount = getAmount(value);
  try {
    const newValue = new Intl.NumberFormat(getLocale(options), {
      style: 'currency',
      currency: options.currency,
      useGrouping: !!options.useGrouping
    }).format(amount);
    return newValue;
  // tslint:disable-next-line: no-empty
  } catch {}

  return value;
}

export function getSymbol(options: CurrencyOptions): string {
  try {
    return new Intl.NumberFormat(getLocale(options), {
      style: 'currency',
      currency: options.currency,
      useGrouping: false
    }).formatToParts(1.00)
      .filter((p) => p.type === 'currency')
      .map((p) => p.value)
      .join('');
  // tslint:disable-next-line: no-empty
  } catch {}

  return '';
}
