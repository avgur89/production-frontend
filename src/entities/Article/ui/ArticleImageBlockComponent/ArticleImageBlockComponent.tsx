import { memo } from 'react';
import { clsx } from 'clsx';

import { ArticleImageBlock } from '../../model/types/Article';

import { Text, TextAlign } from 'shared/ui/Text/Text';

import classes from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
  const { className, block } = props;

  return (
    <div className={clsx(classes.articleImageBlock, [className])}>
      <img
        className={classes.img}
        src={block.src}
        alt={block.title}
      />
      {block.title && <Text text={block.title} align={TextAlign.CENTER} />}
    </div>
  );
});
