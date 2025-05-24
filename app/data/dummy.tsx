export const customers = [
  { id: 1, name: 'Raunit Singh', lastMessage: 'Need refund', time: '1m ago' },
  { id: 2, name: 'Bomani Roy', lastMessage: 'Order issue', time: '5m ago' },
  { id: 3, name: 'Chandan Sahu', lastMessage: 'Delay in delivery', time: '8m ago' },
  { id: 4, name: 'Arnab Kumar', lastMessage: 'Requesting invoice', time: '12m ago' },
];

export const dummyMessages: { [key: number]: { from: 'user' | 'agent'; text: string; time: string }[] } = {
  1: [
    { from: 'user', text: 'Hello, I want a refund', time: '10:00' },
    { from: 'agent', text: 'Sure! Let me help.', time: '10:01' },
  ],
  2: [
    { from: 'user', text: 'My order hasn’t arrived', time: '11:15' },
    { from: 'agent', text: 'I’ll check on that for you.', time: '11:16' },
  ],
  3: [
    { from: 'user', text: 'Why is the delivery delayed?', time: '12:30' },
    { from: 'agent', text: 'Apologies, we’re checking with the courier.', time: '12:32' },
  ],
  4: [
    { from: 'user', text: 'Can I get an invoice?', time: '13:05' },
    { from: 'agent', text: 'Sure, I’ll email it to you shortly.', time: '13:06' },
  ],
};
