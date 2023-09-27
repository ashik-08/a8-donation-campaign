import NavBar from "../../components/Header/NavBar/NavBar";
import StatPieChart from "../../components/StatPieChart/StatPieChart";

const Statistics = () => {
    return (
        <div className="container mx-auto">
            <NavBar></NavBar>
            <StatPieChart></StatPieChart>
        </div>
    );
};

export default Statistics;