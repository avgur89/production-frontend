import React, {
  InputHTMLAttributes, memo, useEffect, useRef,
} from 'react';
import { clsx } from 'clsx';

import { Mods } from 'shared/lib/classNames/classNames';

import classes from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    type = 'text',
    placeholder,
    onChange,
    autofocus,
    readonly,
    ...otherProps
  } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autofocus) {
      inputRef.current?.focus();
    }
  }, [autofocus]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const mods: Mods = {
    [classes.readonly]: readonly,
  };

  return (
    <div className={clsx(classes.wrapper, [className])}>
      {placeholder && (
        <div className={classes.placeholder}>
          {`${placeholder}>`}
        </div>
      )}

      <input
        className={clsx(classes.input, mods)}
        type={type}
        ref={inputRef}
        value={value}
        onChange={onChangeHandler}
        readOnly={readonly}
        {...otherProps}
      />
    </div>
  );
});
