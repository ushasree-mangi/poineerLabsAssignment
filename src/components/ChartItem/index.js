import './index.css'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label,
} from 'recharts'

const ChartItem = props => {
  const {details} = props
  console.log(details)

  return (
    <>
      <LineChart
        width={600}
        height={300}
        data={details}
        margin={{
          top: 15,
          right: 30,
          left: 30,
          bottom: 20,
        }}
      >
        <CartesianGrid horizontal="true" vertical="" stroke="#243240" />
        <XAxis dataKey="year" tick={{fill: '#fff'}}>
          <Label
            value="Year"
            className="label"
            offset={0}
            fill="#fff"
            position="bottom"
            contentStyle={{marginTop: '10px',color:'#008000', paddingTop: 20}}
          />
        </XAxis>

        <YAxis tick={{fill: '#fff'}} />
        <Tooltip
          contentStyle={{backgroundColor: '#8884d8', color: '#fff'}}
          itemStyle={{color: '#fff'}}
          cursor={false}
        />
        <Line
          type="monotone"
          dataKey="population"
          stroke="#8884d8"
          strokeWidth="5"
          dot={{fill: '#2e4355', stroke: '#8884d8', strokeWidth: 2, r: 5}}
          activeDot={{
            fill: '#2e4355',
            stroke: '#8884d8',
            strokeWidth: 5,
            r: 10,
          }}
        />
      </LineChart>
    </>
  )
}

export default ChartItem