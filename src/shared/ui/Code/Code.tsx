import { memo, useCallback } from 'react';
import { clsx } from 'clsx';

import CopyIcon from 'shared/assets/icons/copy.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

import classes from './Code.module.scss';

interface CodeProps {
  className?: string;
  text: string;
}

export const Code = memo((props: CodeProps) => {
  const { className, text } = props;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={clsx(classes.code, [className])}>
      <Button
        className={classes.copyBtn}
        onClick={onCopy}
        theme={ButtonTheme.CLEAR}
      >
        <CopyIcon className={classes.copyIcon} />
      </Button>
      <code>
        {text}
      </code>
    </pre>
  );
});
