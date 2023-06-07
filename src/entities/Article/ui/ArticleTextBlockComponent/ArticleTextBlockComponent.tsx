import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { clsx } from 'clsx';

import { ArticleTextBlock } from '../../model/types/Article';

import { Text } from 'shared/ui/Text/Text';

import classes from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
  const { t } = useTranslation();
  const { className, block } = props;

  return (
    <div className={clsx(classes.articleTextBlock, [className])}>
      {block.title && <Text className={classes.title} title={block.title} />}
      {block.paragraphs.map((paragraph, index) => (
        <Text key={paragraph} className={classes.paragraph} text={paragraph} />
      ))}
    </div>
  );
});
