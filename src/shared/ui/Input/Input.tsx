import React, {
  InputHTMLAttributes, memo, useEffect, useRef,
} from 'react';
import { clsx } from 'clsx';

import classes from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    type = 'text',
    placeholder,
    onChange,
    autofocus,
    ...otherProps
  } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autofocus) {
      inputRef?.current.focus();
    }
  }, [autofocus]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={clsx(classes.wrapper, [className])}>
      {placeholder && (
        <div className={classes.placeholder}>
          {`${placeholder}>`}
        </div>
      )}

      <input
        className={classes.input}
        type={type}
        ref={inputRef}
        value={value}
        onChange={onChangeHandler}
        {...otherProps}
      />
    </div>
  );
});
