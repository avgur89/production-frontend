import { useTranslation } from 'react-i18next';
import { clsx } from 'clsx';

import { profileReducer } from 'entities/Profile';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation();

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={clsx([className])}>
        {t('Сторінка профілю')}
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
