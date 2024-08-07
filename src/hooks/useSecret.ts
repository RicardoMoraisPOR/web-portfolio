import { useContext } from 'react';
import SecretContext from '../contexts/SecretsContext';

export const useSecretContext = () => {
  const context = useContext(SecretContext);
  if (!context) {
    throw new Error('useSecretContext must be used within a SecretProvider');
  }
  return context;
};
