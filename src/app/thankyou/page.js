import Link from 'next/link';
import Header from '../../components/Header';

const ThankYouPage = () => {
  return (
    <div className="container mx-auto p-6">
      <Header />
      <main className="mt-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Thank you for your order</h1>
        <p className="text-lg text-gray-600 mb-6">
          Your order has been placed successfully.
        </p>
        <Link href="/">
          <span className="btn-turqoise">Continue Shopping</span>
        </Link>
      </main>
    </div>
  );
};

export default ThankYouPage;
