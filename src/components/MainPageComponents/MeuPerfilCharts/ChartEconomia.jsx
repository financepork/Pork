import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';





const RADIAN = Math.PI / 180;
const COLORS = [' oklch(76.5% 0.177 163.223)', 'oklch(0.5478 0.1112 166.99)',];


const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
    const y = cy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${((percent ?? 1) * 100).toFixed(0)}%`}
        </text>
    );
};


const ChartEconomia = ({valueEco, valueRenda}) => {

    

    const data = [
        { name: 'Valor a Economizar', value: Number(valueEco) },
        { name: 'Dinheiro Livre', value: (Number(valueRenda) - Number(valueEco)) },
    ];

    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart width={500} height={500}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius="100%"
                    fill="#8884d8"
                    dataKey="value"
                    stroke="var(--color-chumbo)"  
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${entry.name}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
};

export default ChartEconomia;