import Card from "./Card";

const AllCards = ( {donations} ) => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-5 mb-32 md:mt-20 lg:mt-24">
            {
                donations && donations.map(donation => <Card key={donation.id} donation={donation}></Card>)
            }
        </div>
    );
};

export default AllCards;