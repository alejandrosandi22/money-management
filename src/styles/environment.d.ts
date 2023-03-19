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
      NODEMAILER_SMTP: string;
      NODEMAILER_PORT: number;
    }
  }
}

export {};
