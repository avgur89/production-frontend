import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { clsx } from 'clsx';

import { LoginModal } from 'features/AuthByUsername';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

import classes from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

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
