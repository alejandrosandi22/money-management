import SEOLayout from '../../../commons/components/Layouts/SEOLayout';

export default function VerificationRequest() {
  return (
    <SEOLayout pageTitle='Verification Request'>
      <div className='flex min-h-screen w-full items-center justify-center'>
        <div className='rounded border border-gray-200 p-10'>
          <h1 className='text-center text-lg font-medium text-black'>
            Check your email
          </h1>
          <p className='text-center text-lg text-black'>
            A sign in link has been sent to your email address.
          </p>
        </div>
      </div>
    </SEOLayout>
  );
}
