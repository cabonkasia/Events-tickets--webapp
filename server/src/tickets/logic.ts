
export const isOnlyTicket = (allTicketsOfAuthor, risk) => {
 return allTicketsOfAuthor.length === 1 ? risk += 10 : risk
}

export const averagePrice = (allTicketsOfEvent) => {
  const tickets = allTicketsOfEvent
  return Math.round((tickets.map(ticket => ticket.price).reduce((prev, next) => prev + next)) / tickets.length);
}

export const isCheaper = (ticket, averagePrice, risk) => {
  const average = averagePrice
  if (ticket.price < average)
    return risk += (average - ticket.price)

  if (ticket.price > averagePrice) {
    const difference = ticket.price - average
    return difference < 10 ? risk -= difference : risk -= 10
  }
  return risk
}

export const inBussinessHours = (ticket, risk) => {
  const time = ticket.timestamp.slice(11, 13).concat(ticket.timestamp.slice(14, 16))
  const bh = parseInt(time) >= 900 && parseInt(time) <= 1700
  if (bh) return risk -= 10
  if (!bh) return risk += 10
}

export const hasManyComments = (ticket, risk) => {
  if (ticket.comments.length > 3)
    return risk += 5
    return risk
}

export const accurateRisk = (risk) => {
  if (risk > 95)
    return risk = 95
  if (risk < 5)
    return risk = 5
  else return Math.round(risk)
}

