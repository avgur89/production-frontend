import { useTranslation } from 'react-i18next';
import { clsx } from 'clsx';

import classes from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
  className?: string;
}

export const ArticleCodeBlockComponent = ({ className }: ArticleCodeBlockComponentProps) => {
  const { t } = useTranslation();

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <div className={clsx(classes.articleCodeBlock, [className])}>
      ArticleCodeBlockComponent
    </div>
  );
};
