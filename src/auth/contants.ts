import { AUTH_SECRET_KEY, ENCRYPT_ALGO, IV } from 'src/env';

export const jwtConstants = {
  secret: AUTH_SECRET_KEY,
  iv: IV,
  algo: ENCRYPT_ALGO,
};
