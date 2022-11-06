import { useTranslation } from 'react-i18next';
import { clsx } from 'clsx';

import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

import classes from './LoginForm.module.scss';

interface LoginFromProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFromProps) => {
  const { t } = useTranslation();

  return (
    <form className={clsx(classes.form, [className])}>
      <Input
        type="text"
        className={classes.input}
        placeholder={t('Введіть логін')}
        autofocus
      />
      <Input
        type="text"
        className={classes.input}
        placeholder={t('Введіть пароль')}
      />
      <Button className={classes.button}>
        {t('Увійти')}
      </Button>
    </form>
  );
};
