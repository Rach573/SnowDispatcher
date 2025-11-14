import type { MailServices } from '../../preload/mailServices';
import type { TacheServices } from '../../preload/tacheServices';
import type { AuthServices } from '../../preload/authServices';

declare global {
  interface Window {
    api: {
      mail: MailServices;
      tache: TacheServices;
      auth: AuthServices;
    };
  }
}

export {};
