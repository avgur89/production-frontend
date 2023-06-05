import { useTranslation } from 'react-i18next';
import { clsx } from 'clsx';

import classes from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
  className?: string;
}

export const ArticleTextBlockComponent = ({ className }: ArticleTextBlockComponentProps) => {
  const { t } = useTranslation();

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <div className={clsx(classes.articleTextBlock, [className])}>
      ArticleTextBlockComponent
    </div>
  );
};
