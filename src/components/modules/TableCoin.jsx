import { ClipLoader } from "react-spinners";

import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";
import { marketChart } from "../../services/cryptoApi";

import styles from "./TableCoin.module.css"


function TableCoin({ coins,isLoading,setChart}) {
  // console.log(coins);
  return (
    <div className={styles.container}>
     {isLoading ? <ClipLoader color="#3874ff" size={120}  /> : 
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Coin</th>
            <th>Name</th>
            <th>Price</th>
            <th>24h</th>
            <th>Total Volume</th>
            <th>Chart</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <TableRow coin={coin} key={coin.id}  setChart={setChart}/>
          ))}
        </tbody>
      </table>}
    </div>
  );
}
export default TableCoin;

const TableRow = ({
  coin ,
  setChart
}) => {
const {
  id,
  name,
  image,
  symbol,
  total_volume,
  current_price,
  price_change_percentage_24h:price_change,
} = coin;
console.log("price_change",price_change)
const showHandler=async ()=>{
try {
  const res=await fetch(marketChart(id));
  
  const json=await res.json();
  // console.log(json)
  setChart({...json,coin})
} catch (error) {
  setChart(null)
  
  
}
}

  return (
    <tr>
      <td>
        <div className={styles.symbol} onClick={showHandler}>
          <img src={image} alt="" />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{name}</td>
      <td>${current_price.toLocaleString()}</td>
      <td className={price_change > 0 ? styles.success : styles.error}>{price_change.toFixed(2)}%</td>
      <td>{total_volume.toLocaleString()}</td>
      <td>
        <img
          src={price_change > 0 ? chartUp : chartDown}
          alt=""
        />
      </td>
    </tr>
  );
};
