import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { clsx } from 'clsx';

import { Button, ButtonTheme } from 'shared/ui/Button/Button';

import classes from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = memo(({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => i18n.changeLanguage(i18n.language === 'ua' ? 'en' : 'ua');

  return (
    <Button
      className={clsx(classes.langSwitcher, [className])}
      theme={ButtonTheme.CLEAR}
      onClick={toggleLanguage}
    >
      {t('Мова')}
    </Button>
  );
});
