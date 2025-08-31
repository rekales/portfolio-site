import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

function AnalyticsChart({ analytics }) {

  const transformData = (analytics) => {
    // get all unique timestamps across all series
    const allTimestamps = [
      ...new Set(
        Object.values(analytics)
          .flatMap(obj => Object.keys(obj))
      )
    ].sort();

    // build an array of { date, series1, series2, ... }
    return allTimestamps.map(ts => {
      const date = new Date(Number(ts) * 1000)
        .toISOString()
        .slice(0, 10); // YYYY-MM-DD

      const row = { date };

      for (const [series, values] of Object.entries(analytics)) {
        row[series] = values[ts] ?? 0; // fill missing with 0
      }

      return row;
    });
  };

  const data = transformData(analytics);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart width={800} height={400} data={data}>
        <CartesianGrid stroke="none" />
        <XAxis dataKey="date" tick={false}/>
        <YAxis />
        <Tooltip />
        <Legend layout="vertical" align="right" verticalAlign="middle"/>

        <Line type="monotone" dataKey="sOekynIc" stroke="#8884d8" dot={false}/>
        <Line type="monotone" dataKey="5jfUeix5" stroke="#82ca9d" dot={false}/>
        <Line type="monotone" dataKey="GRqrodjM" stroke="#ffc658" dot={false}/>
        <Line type="monotone" dataKey="4hoqvPkW" stroke="#ff7300" dot={false}/>
      </LineChart>
    </ResponsiveContainer>
  );
}

export default AnalyticsChart;