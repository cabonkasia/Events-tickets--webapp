import Ticket from './entity'


// const avgPrice = ?

const calculateRisk = (ticketsArr: Ticket[], price: number, avgPrice: number, h: number, comments: number): number => {
  let risk = 5
  // const h = timestamp.slice(11,13)

  if (ticketsArr.length === 1) {
    risk += 10
  }
  if (price < avgPrice) {
    risk += (avgPrice - price)
  }
  if (price > avgPrice) {
    const diff = price - avgPrice
    diff < 10 ? risk -= diff : risk -= 10
  }
  //bh - business hours
  const bh = h >= 9 && h <= 17
  if (bh) { risk -= 10 }
  if (!bh) { risk += 10 }

  if (comments > 3)
    risk += 5
  
  if (risk > 95) { 95 }

  return risk
}

export default calculateRisk

