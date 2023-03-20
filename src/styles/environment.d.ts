declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ENV: 'test' | 'dev' | 'prod';
      FACEBOOK_ID: string;
      FACEBOOK_SECRET: string;
      GOOGLE_ID: string;
      GOOGLE_SECRET: string;
      SLACK_CLIENT_ID: string;
      SLACK_CLIENT_SECRET: string;
      SLACK_VERIFICATION_TOKEN: string;
      EMAIL_SERVER_USER: string;
      EMAIL_SERVER_PASSWORD: string;
      EMAIL_SERVER_HOST: string;
      EMAIL_SERVER_PORT: number;
      EMAIL_FROM: string;
      DATABASE_URL: string;
      JWT_SECRET: string;
    }
  }
}

export {};
