import { useTranslation } from 'react-i18next';
import { clsx } from 'clsx';

import { Profile } from 'entities/Profile';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';

import classes from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  error?: string;
  isLoading?: boolean;
  readonly?: boolean;
  onChangeFirstname: (value?: string) => void;
  onChangeLastname: (value?: string) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstname,
    onChangeLastname,
  } = props;
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <div className={clsx(classes.profileCard, [className, classes.loading])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={clsx(classes.profileCard, [className, classes.error])}>
        <Text
          theme={TextTheme.ERROR}
          title={t('Виникла помилка при завантаженні профіля')}
          text={t('Спробуйте оновити сторінку')}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }

  return (
    <div className={clsx(classes.profileCard, [className])}>
      <Input
        value={data?.first}
        placeholder={t("Ваше ім'я")}
        className={classes.input}
        readonly={readonly}
        onChange={onChangeFirstname}
      />
      <Input
        value={data?.lastname}
        placeholder={t('Ваше прізвище')}
        className={classes.input}
        readonly={readonly}
        onChange={onChangeLastname}
      />
    </div>
  );
};
