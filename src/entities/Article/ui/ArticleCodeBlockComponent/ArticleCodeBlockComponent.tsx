import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { clsx } from 'clsx';

import { ArticleCodeBlock } from '../../model/types/Article';

import { Text } from 'shared/ui/Text/Text';

import classes from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo((props: ArticleCodeBlockComponentProps) => {
  const { t } = useTranslation();
  const { className, block } = props;

  return (
    <div className={clsx(classes.articleCodeBlock, [className])}>
      {block.code && <Text className={classes.code} text={block.code} />}
    </div>
  );
});
