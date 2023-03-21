import { GetServerSideProps } from 'next';
import { getServerSession } from 'next-auth';
import NavLayout from '../commons/components/Layouts/NavLayout';
import SEOLayout from '../commons/components/Layouts/SEOLayout';
import { authOptions } from './api/auth/[...nextauth]';

export default function Incomes() {
  return (
    <SEOLayout pageTitle='Incomes'>
      <NavLayout>
        <div>
          <h1>Incomes</h1>
        </div>
      </NavLayout>
    </SEOLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: '/auth/signin',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};
