import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { clsx } from 'clsx';

import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';

import classes from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation('profile');
  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={clsx(classes.profilePageHeader, [className])}>
      <Text title={t('Профіль')} />
      {readonly ? (
        <Button
          theme={ButtonTheme.OUTLINE}
          onClick={onEdit}
        >
          {t('Редагувати')}
        </Button>
      ) : (
        <>
          <Button
            theme={ButtonTheme.OUTLINE_RED}
            className={classes.cancelBtn}
            onClick={onCancelEdit}
          >
            {t('Відмінити')}
          </Button>
          <Button
            theme={ButtonTheme.OUTLINE}
            onClick={onSave}
          >
            {t('Зберегти')}
          </Button>
        </>
      )}
    </div>
  );
};
