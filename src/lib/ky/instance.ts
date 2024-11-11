import ky from 'ky';

const getFrontendUrl = () => {
  switch (process.env.NODE_ENV) {
    case 'development':
      return 'http://localhost:10242';
    case 'production':
      return 'https://not-woowacourse-1-toodoo-frontend-react-for-example.vercel.app';
    default:
      throw new Error('NODE_ENV is not set');
  }
};

const FRONTEND_URL = getFrontendUrl();

const API_PROXY_URL = new URL('/backend-api', FRONTEND_URL).toString();

const API_URL = API_PROXY_URL;

const kyInstance = ky.create({
  prefixUrl: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Client-Name': 'Yongjun Park', // TODO: PUBLIC_ENV로 빼기
  },
});

export { kyInstance };
