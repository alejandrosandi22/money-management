export interface LoaderProps {
  loading: boolean;
}

export interface AuthFormProps {
  type: 'register' | 'signin';
}

export interface IconsProps {
  className?: string;
  color?: string;
  size?: number;
}

export interface SEOLayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
  pageDescription?: string;
}

export interface NavLayoutProps {
  children: React.ReactNode;
}
