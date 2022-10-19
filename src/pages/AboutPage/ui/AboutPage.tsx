import { useTranslation } from 'react-i18next';

import { BugButton } from 'app/providers/ErrorBoundary';

const AboutPage = () => {
  const { t } = useTranslation('about');

  return (
    <div>
      <BugButton />
      {t('Про сайт')}
    </div>
  );
};

export default AboutPage;
