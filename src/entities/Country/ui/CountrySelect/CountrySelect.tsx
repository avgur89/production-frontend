import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { clsx } from 'clsx';

import { Country } from '../../model/types/country';

import { Select } from 'shared/ui/Select/Select';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const options = [
  { value: Country.Ukraine, content: Country.Ukraine },
  { value: Country.USA, content: Country.USA },
  { value: Country.UK, content: Country.UK },
  { value: Country.Australia, content: Country.Australia },
  { value: Country.Poland, content: Country.Poland },
  { value: Country.Canada, content: Country.Canada },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
  const { t } = useTranslation('profile');
  const {
    className,
    value,
    onChange,
    readonly,
  } = props;

  const onChangeHandler = useCallback(() => {
    onChange?.(value as Country);
  }, [onChange, value]);

  return (
    <Select
      className={clsx('', [className])}
      label={t('Країна')}
      options={options}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
    />

  );
});
