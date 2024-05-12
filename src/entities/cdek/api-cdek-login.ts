import { apiCdek } from "@/shared/api";

const res = new FormData();
res.append("grant_type", "client_credentials");
res.append("client_id", "EMscd6r9JnFiQ3bLoyjJY6eM78JrJceI");
res.append("client_secret", "PjLZkKBHEiLK3YsjtNrt3TGNG0ahs3kG");

export const apiCdekLogin = () => {
  return apiCdek.cdekLogin(res);
};
