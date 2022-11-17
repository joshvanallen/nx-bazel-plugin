import { Person } from "./person";

enum Message {
  Hello,
  Bye,
}

export function printMessage(message: Message, person: Person): void {
  switch(message){
    case Message.Hello: 
      console.log(`Hello ${person.name}`);
      break;
    case Message.Bye:
      console.log(`Bye ${person.name}`);
      break;
    default:
      console.log(`What are you doing ${person.name}?`);
      break;
  }
}

const josh = new Person('Josh');

printMessage(Message.Hello, josh);
printMessage(Message.Bye, josh);
