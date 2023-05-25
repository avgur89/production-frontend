import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { clsx } from 'clsx';

import { Currency } from '../../model/types/currency';

import { Select } from 'shared/ui/Select/Select';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

const options = [
  { value: Currency.UAH, content: Currency.UAH },
  { value: Currency.USD, content: Currency.USD },
  { value: Currency.EUR, content: Currency.EUR },
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const { t } = useTranslation('profile');
  const {
    className,
    value,
    onChange,
    readonly,
  } = props;

  const onChangeHandler = useCallback(() => {
    onChange?.(value as Currency);
  }, [onChange, value]);

  return (
    <Select
      className={clsx('', [className])}
      label={t('Валюта')}
      options={options}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
    />

  );
});
