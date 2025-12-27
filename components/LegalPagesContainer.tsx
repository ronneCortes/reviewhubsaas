import React from 'react';
import { LegalPageLayout } from './LegalPageLayout';
import PrivacyContent from './PrivacyPolicyPage';
import TermsContent from './TermsOfServicePage';
import CookieContent from './CookiePolicyPage';

const LegalPagesContainer: React.FC = () => {
  const currentPath = window.location.pathname;
  let initialTab = 'privacy';
  let pageTitle = 'Políticas Legais';

  if (currentPath.startsWith('/terms-of-service')) {
    initialTab = 'terms';
    pageTitle = 'Termos de Serviço';
  } else if (currentPath.startsWith('/cookie-policy')) {
    initialTab = 'cookies';
    pageTitle = 'Política de Cookies';
  } else if (currentPath.startsWith('/privacy-policy')) {
    initialTab = 'privacy';
    pageTitle = 'Política de Privacidade';
  }

  return (
    <LegalPageLayout
      initialTab={initialTab}
      privacyContent={<PrivacyContent />}
      termsContent={<TermsContent />}
      cookieContent={<CookieContent />}
      title={pageTitle}
    />
  );
};

export default LegalPagesContainer;
