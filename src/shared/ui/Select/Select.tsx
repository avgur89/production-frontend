import { ChangeEvent, memo, useMemo } from 'react';
import { clsx } from 'clsx';

import { Mods } from 'shared/lib/classNames/classNames';

import classes from './Select.module.scss';

interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  readonly?: boolean;
  onChange?: (value: string) => void;
}

export const Select = memo((props: SelectProps) => {
  const {
    className,
    label,
    options,
    value,
    readonly,
    onChange,
  } = props;

  const mods: Mods = {};

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  const optionsList = useMemo(() => options?.map((opt) => (
    <option
      className={classes.option}
      value={opt.value}
      key={opt.value}
    >
      {opt.content}
    </option>
  )), [options]);

  return (
    <div className={clsx(classes.wrapper, mods, [className])}>
      {label && (
        <span className={classes.label}>{`${label}>`}</span>
      )}
      <select
        className={classes.select}
        value={value}
        onChange={onChangeHandler}
        disabled={readonly}
      >
        {optionsList}
      </select>
    </div>
  );
});
