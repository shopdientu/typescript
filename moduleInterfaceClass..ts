import { Print } from "./interfacePrint";
import { Invoice, Payment } from "./Invoice";
const documentOne: Print = new Invoice("vinamilk", "drink milk", 5000);
const documentTwo: Print = new Payment("vietnamAirline", "fly", 10000);

const allDocument: Print[] = [];

allDocument.push(documentOne);
allDocument.push(documentTwo);
allDocument.push("ashd"); // error beacoun
