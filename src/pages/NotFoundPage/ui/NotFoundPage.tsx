import { useTranslation } from 'react-i18next';
import { clsx } from 'clsx';

import classes from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation();

  return (
    <div className={clsx(classes.notFoundPage, [className])}>
      {t('Сторінка не знайдена')}
    </div>
  );
};
