import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { clsx } from 'clsx';

import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import {
  getProfileIsLoading,
} from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text } from 'shared/ui/Text/Text';

import classes from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation('profile');
  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);

  return (
    <div className={clsx(classes.profileCard, [className])}>
      <div className={classes.header}>
        <Text title={t('Профіль')} />
        <Button theme={ButtonTheme.OUTLINE} className={classes.editBtn}>{t('Редагувати')}</Button>
      </div>

      <div className={classes.data}>
        <Input
          value={data?.first}
          placeholder={t("Ваше ім'я")}
          className={classes.input}
        />
        <Input
          value={data?.lastname}
          placeholder={t('Ваше прізвище')}
          className={classes.input}
        />
      </div>
    </div>
  );
};
