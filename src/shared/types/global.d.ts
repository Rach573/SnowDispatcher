import type { MailServices } from '../../preload/mailServices';
import type { TacheServices } from '../../preload/tacheServices';

declare global {
  interface Window {
    api: {
      mail: MailServices;
      tache: TacheServices;
    };
  }
}

export {};
