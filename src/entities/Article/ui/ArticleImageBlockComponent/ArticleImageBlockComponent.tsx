import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { clsx } from 'clsx';

import { ArticleImageBlock } from '../../model/types/Article';

import classes from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
  const { t } = useTranslation();
  const { className, block } = props;

  return (
    <div className={clsx(classes.articleImageBlock, [className])}>
      {block.src && <img src={block.src} alt={block.type} />}
    </div>
  );
});
