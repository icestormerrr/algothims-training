export function getFirstTicket(tickets) {
    var first;
    var toFrom = {};
    for (var _i = 0, tickets_1 = tickets; _i < tickets_1.length; _i++) {
        var ticket = tickets_1[_i];
        toFrom[ticket.to] = ticket.from;
    }
    for (var _a = 0, tickets_2 = tickets; _a < tickets_2.length; _a++) {
        var ticket = tickets_2[_a];
        if (!toFrom[ticket.from])
            first = ticket;
    }
    return first;
}
export function getSortedTicketList(tickets, first) {
    var currentIndex = 0;
    var result = [first];
    while (currentIndex < tickets.length) {
        var next = tickets.find(function (tick) { return tick.from === result[currentIndex].to; });
        if (next)
            result.push(next);
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
