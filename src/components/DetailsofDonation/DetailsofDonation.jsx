import PropTypes from 'prop-types';
import Swal from "sweetalert2";

const DetailsofDonation = ({ detail }) => {
  const { picture_url, price, text_button_col, title, description } = detail;

  const handleDonation = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `Thank you for your $${price} donation`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div>
      <div className="relative mt-12 md:mt-20">
        <img className="rounded-lg" src={picture_url} alt="" />
        <div className="absolute bottom-0  w-full h-1/4 md:h-[15%] lg:h-[13%] xl:h-[10%] bg-overlay-col rounded-b-lg">
          <button
            onClick={handleDonation}
            className="text-white md:text-lg font-semibold rounded px-3 py-1 md:px-5 md:py-2 relative top-[23%] lg:top-[25%] 2xl:top-[30%] left-6 md:left-10"
            style={{ backgroundColor: text_button_col }}
          >
            Donate ${price}
          </button>
        </div>
      </div>
      <div className="mt-14 mb-28 space-y-6">
        <h2 className="text-pri-text text-4xl font-bold">{title}</h2>
        <p className="text-des-text">{description}</p>
      </div>
    </div>
  );
};

DetailsofDonation.propTypes = {
    // detail: PropTypes.array
    detail: PropTypes.object.isRequired
};

export default DetailsofDonation;
