import { clsx } from 'clsx';

import { Loader } from 'shared/ui/Loader/Loader';

import classes from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
  <div className={clsx(classes.pageLoader, [className])}>
    <Loader />
  </div>
);
