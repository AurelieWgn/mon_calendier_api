import { jwtConstants } from 'src/auth/contants';
import { createCipheriv, createDecipheriv } from 'crypto';

export const passwordEncrypt = async (pwdToEncrypt: string) => {
  const key = Buffer.from(jwtConstants.secret, 'hex');
  const iv = Buffer.from(jwtConstants.iv, 'hex');

  const cipher = createCipheriv(jwtConstants.algo, Buffer.from(key), iv);
  let encrypted = cipher.update(pwdToEncrypt);
  encrypted = Buffer.concat([encrypted, cipher.final()]);

  return encrypted.toString('hex');
};

export const passwordDecrypt = async (
  encryptedPassword: string,
): Promise<string> => {
  const iv = Buffer.from(jwtConstants.iv, 'hex');
  const encryptedText = Buffer.from(encryptedPassword, 'hex');
  const key = Buffer.from(jwtConstants.secret, 'hex');

  const decipher = createDecipheriv(jwtConstants.algo, key, iv);
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);

  return decrypted.toString();
};
