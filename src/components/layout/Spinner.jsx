import spinner from './assets/spinner.gif';

const Spinner = () => {
  return (
    <div className="mt-20">
      <img width={180} src={spinner} alt="Loading" className="text-center mx-auto" />
    </div>
  );
};

export default Spinner;
