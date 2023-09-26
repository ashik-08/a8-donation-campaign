import PropTypes from "prop-types";

const DonationCard = ({ donation }) => {
  const {
    picture_url,
    category,
    title,
    price,
    card_bg,
    category_bg,
    text_button_col,
  } = donation;

  return (
    <div>
      <div className="flex">
        <figure>
          <img
            className="w-screen h-[150px] lg:h-[180px] xl:h-[240px] rounded-l-lg"
            src={picture_url}
            alt=""
          />
        </figure>
        <div
          style={{ backgroundColor: card_bg }}
          className="flex flex-col justify-center items-start p-5 space-y-1 lg:space-y-1.5 xl:space-y-2.5 rounded-r-lg w-screen h-[150px] lg:h-[180px] xl:h-[240px]"
        >
          <span
            style={{ backgroundColor: category_bg, color: text_button_col }}
            className="text-xs lg:text-sm font-medium px-2.5 py-1 rounded"
          >
            {category}
          </span>
          <p className="text-pri-text text-sm lg:text-lg xl:text-2xl font-semibold">
            {title}
          </p>
          <p
            style={{ color: text_button_col }}
            className="text-sm lg:text-base xl:text-lg font-semibold"
          >
            ${price}
          </p>
          <button
            style={{ backgroundColor: text_button_col }}
            className="text-white text-sm lg:text-base xl:text-lg font-semibold px-2.5 py-1.5 xl:px-4 xl:py-2 rounded"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

DonationCard.propTypes = {
  donation: PropTypes.object,
};

export default DonationCard;
