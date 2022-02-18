import { Print } from "./interfacePrint";

export class Invoice implements Print {
  constructor(
    readonly client: string,
    private work: string,
    public amount: number
  ) {}

  print() {
    return `${this.client} owes ${this.amount} dollar(s) for this work: ${this.work}`;
  }
}

export class Payment implements Print {
  constructor(
    readonly recipient: string,
    private job: string,
    public amt: number
  ) {}

  print() {
    return `I own  ${this.recipient} ${this.amt} dollar(s) for this job: ${this.job}`;
  }
}
