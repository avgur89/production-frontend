import { useTranslation } from 'react-i18next';
import { clsx } from 'clsx';

import { Country, CountrySelect } from 'entities/Country';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Profile } from 'entities/Profile';
import { Mods } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
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
  onChangeFirstname?: (value?: string) => void;
  onChangeLastname?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (currency: Currency) => void;
  onChangeCountry?: (country: Country) => void;
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
    onChangeCity,
    onChangeAge,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
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

  const mods: Mods = {
    [classes.editing]: !readonly,
  };

  return (
    <div className={clsx(classes.profileCard, mods, [className])}>
      {data?.avatar && (
        <div className={classes.avatarWrapper}>
          <Avatar src={data?.avatar} />
        </div>
      )}

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
      <Input
        value={data?.age}
        placeholder={t('Ваш вік')}
        className={classes.input}
        readonly={readonly}
        onChange={onChangeAge}
      />
      <Input
        value={data?.city}
        placeholder={t('Місто')}
        className={classes.input}
        readonly={readonly}
        onChange={onChangeCity}
      />
      <Input
        value={data?.username}
        placeholder={t('Користувач')}
        className={classes.input}
        readonly={readonly}
        onChange={onChangeUsername}
      />
      <Input
        value={data?.avatar}
        placeholder={t('Аватар')}
        className={classes.input}
        readonly={readonly}
        onChange={onChangeAvatar}
      />
      <CurrencySelect
        className={classes.input}
        value={data?.currency}
        onChange={onChangeCurrency}
        readonly={readonly}
      />
      <CountrySelect
        className={classes.input}
        value={data?.country}
        onChange={onChangeCountry}
        readonly={readonly}
      />
    </div>
  );
};
