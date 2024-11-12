import ky from 'ky';

import { API_URL } from '@/constants/url';

const kyInstance = ky.create({
  prefixUrl: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Client-Name': 'Yongjun Park', // TODO: PUBLIC_ENV로 빼기
  },
});

export { kyInstance };
