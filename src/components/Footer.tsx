import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className=''>
      <FooterTop />
      <FooterBottom />
    </div>
  );
};
const FooterTop = () => {
  return (
    <div
      className='min-[1320px]:px-0:w mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-neutral-200 px-6 py-12 text-sm dark:border-neutral-700 md:flex-row md:gap-12 md:px-4
    '
    >
      <div>
        <Link
          href='/'
          className='flex items-center gap-2 text-black dark:text-white md:pt-1'
        >
          <Image
            src='/nebula.jpg'
            alt='nebula-buys'
            width={40}
            height={10}
            className='rounded-lg'
          />
          <span className='ml-2'>Nebula Buys</span>
        </Link>
      </div>
      <div className='px-5 text-[15px]'>
        <ul>
          <li>
            <Link href='/' className='hover:underline'>
              Home
            </Link>
          </li>
          <li>
            <Link href='/about' className='hover:underline'>
              About
            </Link>
          </li>
          <li>
            <Link href='/contact' className='hover:underline'>
              Contact
            </Link>
          </li>
          <li>
            <Link href='/terms-condition' className='hover:underline'>
              Terms & Conditions
            </Link>
          </li>
          <li>
            <Link href='/shiping-return-policy' className='hover:underline'>
              Shipping & Return Policy
            </Link>
          </li>
          <li>
            <Link href='/privacy-policy' className='hover:underline'>
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href='/faq' className='hover:underline'>
              FAQ
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
const FooterBottom = () => {
  return (
    <div className=' bottom-0 flex border-t-2 border-solid border-neutral-700 px-5 py-8'>
      <p className='text-[15px]'>
        <span className='pl-1.5 pr-6'>
          © 2023 NEBULA, Inc. All right reserved.
        </span>
        |<span className='pl-3 '>Designed in Lalitpur</span>
      </p>
    </div>
  );
};

export default Footer;
