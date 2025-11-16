import { prisma } from '../../main/repositories/prisma/client';
// Note: in renderer we cannot import server-side prisma. Instead we call preload/api.

export async function fetchMails() {
  if (window.api?.mail?.list) {
    return await window.api.mail.list();
  }
  // fallback: return empty
  return [];
}

export async function updateMailStatus(id:number, status:string) {
  if (window.api?.mail?.updateStatus) {
    return await window.api.mail.updateStatus({ id, status });
  }
  throw new Error('No mail API available');
}
