export type Ticket = {from: string, to: string}

export function getFirstTicket(tickets: Ticket[]): Ticket {
  let first: Ticket;
  const toFrom: Record<string, string> = {};

  for (const ticket of tickets) {
    toFrom[ticket.to] = ticket.from;
  }

  for (const ticket of tickets) {
    if (!toFrom[ticket.from]) first = ticket;
  }

  return first;
}

export function getSortedTicketList(tickets: Ticket[], first: Ticket) {
  let currentIndex = 0;

  const result = [first];

  while (currentIndex < tickets.length) {
    let next = tickets.find((tick) => tick.from === result[currentIndex].to);
    if (next) result.push(next);
    currentIndex++;
  }

  return result;
}
// const input: Ticket[] = [
//   { from: "С.Петербург", to: "Минск" },
//   { from: "Киев", to: "Новосибирск" },
//   { from: "Череповец", to: "Москва" },
//   { from: "Минск", to: "Киев" },
//   { from: "Москва", to: "С.Петербург" },
// ];

// const first = getFirstTicket(input);
// console.log(getSortedTicketList(input, first));
