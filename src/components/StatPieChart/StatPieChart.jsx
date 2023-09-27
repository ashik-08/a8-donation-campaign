import { PieChart, Pie, Cell } from "recharts";

const StatPieChart = () => {
  const donations = JSON.parse(localStorage.getItem("donation")) || [];
  const donationsMade = donations.length;

  const data = [
    { name: "Total Donation", value: 12 },
    { name: "Your Donation", value: donationsMade },
  ];

  const COLORS = ["#FF444A", "#00C49F"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        className="text-2xl font-bold"
      >
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };

  return (
    <div className="mt-20 md:mt-28 lg:mt-36 xl:mt-48 mb-20">
      <div className="flex justify-center">
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-14 mt-16">
        <p className="flex items-center gap-4">
          <span className="text-pri-text text-lg">Your Donation</span>
          <span className="w-24 h-3 bg-[#00C49F] rounded mt-0.5"></span>
        </p>
        <p className="flex items-center gap-4">
          <span className="text-pri-text text-lg">Total Donation</span>
          <span className="w-24 h-3 bg-[#FF444A] rounded mt-0.5"></span>
        </p>
      </div>
    </div>
  );
};

export default StatPieChart;
