import PropTypes from 'prop-types';

const Card = ( {donation} ) => {

    const {picture_url, category, title, card_bg, category_bg, text_button_col} = donation;

    return (
        <div>
            <figure>
                <img className="w-full h-[200px] rounded-t-lg" src={picture_url} alt="" />
            </figure>
            <div style={{backgroundColor:card_bg}} className="p-4 space-y-2 rounded-b-lg">
                <span style={{backgroundColor:category_bg, color:text_button_col}} className="text-sm font-medium px-2.5 py-1 rounded-md">{category}</span>
                <p style={{color:text_button_col}} className="text-xl font-semibold">{title}</p>
            </div>
        </div>
    );
};

Card.propTypes = {
    donation: PropTypes.object
};

export default Card;