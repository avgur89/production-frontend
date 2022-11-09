import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { clsx } from 'clsx';

import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import {
  loginByUsername,
} from '../../model/services/loginByUsername/loginByUsername';
import { loginActions } from '../../model/slice/loginSlice';

import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';

import classes from './LoginForm.module.scss';

interface LoginFromProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFromProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
    username,
    password,
    error,
    isLoading,
  } = useSelector(getLoginState);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    <form className={clsx(classes.form, [className])}>
      <Text title={t('Форма авторизації')} className={classes.title} />

      {error && <Text text={t('Невірний логін або пароль')} theme={TextTheme.ERROR} />}

      <Input
        type="text"
        className={classes.input}
        placeholder={t('Введіть логін')}
        onChange={onChangeUsername}
        value={username}
        autofocus
      />
      <Input
        type="text"
        className={classes.input}
        placeholder={t('Введіть пароль')}
        onChange={onChangePassword}
        value={password}
      />
      <Button
        theme={ButtonTheme.OUTLINE}
        className={classes.button}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t('Увійти')}
      </Button>
    </form>
  );
});
