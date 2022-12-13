import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { clsx } from 'clsx';

import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import {
  getLoginIsLoading,
} from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import {
  getLoginPassword,
} from '../../model/selectors/getLoginPassword/getLoginPassword';
import {
  getLoginUsername,
} from '../../model/selectors/getLoginUsername/getLoginUsername';
import {
  loginByUsername,
} from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';

import { ReduxStoreWithManager } from 'app/providers/StoreProvider/config/StateSchema';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';

import classes from './LoginForm.module.scss';

export interface LoginFormProps {
  className?: string;
}

const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const store = useStore() as ReduxStoreWithManager;
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  useEffect(() => {
    store.reducerManager.add('loginForm', loginReducer);

    return () => {
      store.reducerManager.remove('loginForm');
    };
    // eslint-disable-next-line
  }, []);

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

export default LoginForm;
