import { memo } from 'react';
import { clsx } from 'clsx';

import { ArticleCodeBlock } from '../../model/types/Article';

import { Code } from 'shared/ui/Code/Code';

import classes from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo((props: ArticleCodeBlockComponentProps) => {
  const { className, block } = props;

  return (
    <div className={clsx(classes.articleCodeBlock, [className])}>
      <Code text={block.code} />
    </div>
  );
});
