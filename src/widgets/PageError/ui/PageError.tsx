import { useTranslation } from 'react-i18next';
import { clsx } from 'clsx';

import { Button } from 'shared/ui/Button/Button';

import classes from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const reloadPage = () => window.location.reload();

  return (
    <div className={clsx(classes.pageError, [className])}>
      <p>{t('Виникла помилка')}</p>
      <Button onClick={reloadPage}>{t('Оновити сторінку')}</Button>
    </div>
  );
};
