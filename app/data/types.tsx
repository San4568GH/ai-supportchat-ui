
export type Sender = 'user' | 'agent' | 'ai';

export interface Message {
  from: Sender;
  text: string;
  time: string; 
}

export interface Customer {
  id: number;
  name: string;
  lastMessage: string;
}
