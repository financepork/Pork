import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';


const RADIAN = Math.PI / 180;
const COLORS = ['oklch(50.5% 0.213 27.518)', 'oklch(84.5% 0.143 164.978)', 'oklch(37.9% 0.146 265.522)', 'oklch(85.2% 0.199 91.936)', 'oklch(47% 0.157 37.304)'];


const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
  const y = cy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" className='text-sm self-center text-center '>
      {`${((percent ?? 1) * 100).toFixed(0)}%`}
    </text>
  );
};


const ChartGastos = ({valueAlimentacao, valueContas, valueLazer, valueTransporte, valueOutros}) => {

  const data = [
  { name: 'Alimentação', value: Number(valueAlimentacao) },
  { name: 'Transporte', value: Number(valueTransporte) },
  { name: 'Lazer', value: Number(valueLazer) },
  { name: 'Contas Básicas', value: Number(valueContas)},
  { name: 'Outros', value: Number(valueOutros) },
];

  return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart >
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius="90%"
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

export default ChartGastos;