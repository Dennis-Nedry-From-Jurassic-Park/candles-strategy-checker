import { Bar } from "react-chartjs-2";
let startingDate = new Intl.DateTimeFormat().format(new Date());
let config = {
  datasets: [
    {
      data: [
        {
          startingDate,
          o: 10.2,
          h: 10.2,
          l: 9.8,
          c: 9.5
        }
      ],
      type: "candlestick"
    }
  ]
};

export default function App() {
  return (
    <div className="App">
      <Bar width={400} height={600} data={config} />
    </div>
  );
}
