import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
        Hali ham Sifatli hizmatni qidiryapsizmi? <br className='sm:block hidden' />
        O'ylab o'tirmasdan men bilan aloqaga chiqing!
      </p>
      <Link to='/contact' className='btn'>
        Contact
      </Link>
    </section>
  );
};

export default CTA;
