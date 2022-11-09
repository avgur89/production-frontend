import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { clsx } from 'clsx';

import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

import classes from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const authData = useSelector(getUserAuthData);
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <div className={clsx(classes.navbar, [className])}>
        <Button
          theme={ButtonTheme.CLEAR_INVERTED}
          className={classes.links}
          onClick={onLogout}
        >
          {t('Вийти')}
        </Button>
      </div>
    );
  }

  return (
    <div className={clsx(classes.navbar, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={classes.links}
        onClick={onShowModal}
      >
        {t('Увійти')}
      </Button>

      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </div>
  );
};
