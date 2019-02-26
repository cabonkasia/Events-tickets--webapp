
export const isOnlyTicket = (allTicketsOfAuthor) => {
  let result = 0;
  return allTicketsOfAuthor.length === 1 ? result += 10 : result;
}

export const averagePrice = (allTicketsOfEvent) => {
  const tickets = allTicketsOfEvent
  return Math.round((tickets.map(ticket => ticket.price).reduce((prev, next) => prev + next)) / tickets.length);
}

export const isCheaper = (price, averagePrice) => {
  const average = averagePrice
  let result = 0;
  if (price < average)
    return result += (average - price)

  if (price > average) {
    const difference = price - average
    return difference < 10 ? result -= difference : result -= 10
  }
  return result;
}

export const inBussinessHours = (timestamp) => {
  let result = 0;
  const time = timestamp.slice(11, 13).concat(timestamp.slice(14, 16))
  const bh = parseInt(time) >= 900 && parseInt(time) <= 1700
  if (bh) return result -= 10
  if (!bh) return result += 10

  return result;
}

export const hasManyComments = (comments) => {
  let result = 0;
  if (comments.length > 3)
    return result += 5;
  return result;
}

export const accurateRisk = (risk) => {
  if (risk > 95)
    return risk = 95
  if (risk < 5)
    return risk = 5
  else return Math.round(risk)
}

