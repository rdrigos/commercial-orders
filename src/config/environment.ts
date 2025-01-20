import environment from 'env-var';

export const env = {
  NEXT_PUBLIC_APP_NAME: environment.get('NEXT_PUBLIC_APP_NAME').required().asString(),
  NEXT_PUBLIC_APP_DESC: environment.get('NEXT_PUBLIC_APP_DESC').required().asString(),
};
