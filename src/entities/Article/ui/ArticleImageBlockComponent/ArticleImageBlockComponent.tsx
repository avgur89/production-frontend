import { useTranslation } from 'react-i18next';
import { clsx } from 'clsx';

import classes from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
  className?: string;
}

export const ArticleImageBlockComponent = ({ className }: ArticleImageBlockComponentProps) => {
  const { t } = useTranslation();

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <div className={clsx(classes.articleImageBlock, [className])}>
      ArticleImageBlockComponent
    </div>
  );
};
