import { useTranslation } from 'react-i18next';
import { clsx } from 'clsx';

import { Button, ThemeButton } from 'shared/ui/Button/Button';

import classes from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => i18n.changeLanguage(i18n.language === 'ua' ? 'en' : 'ua');

  return (
    <Button
      className={clsx(classes.langSwitcher, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toggleLanguage}
    >
      {t('Мова')}
    </Button>
  );
};
