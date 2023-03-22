import { GetServerSideProps } from 'next';
import { getServerSession } from 'next-auth';
import Footer from '../commons/components/Footer';
import NavLayout from '../commons/components/Layouts/NavLayout';
import SEOLayout from '../commons/components/Layouts/SEOLayout';
import { Header } from '../components/Expenses';
import Board from '../components/Expenses/Board';
import { authOptions } from './api/auth/[...nextauth]';

export default function Expenses() {
  return (
    <SEOLayout pageTitle='Expenses'>
      <NavLayout>
        <div className='h-full overflow-y-auto px-8 py-2.5'>
          <Header />
          <div className='space-y-2.5'>
            <Board />
            <Footer />
          </div>
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
