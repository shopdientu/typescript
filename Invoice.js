"use strict";
exports.__esModule = true;
var Invoice = /** @class */ (function () {
    function Invoice(client, work, amount) {
        this.client = client;
        this.work = work;
        this.amount = amount;
    }
    Invoice.prototype.print = function () {
        return this.client + " owes " + this.amount + " dollar(s) for this work: " + this.work;
    };
    return Invoice;
}());
exports.Invoice = Invoice;
var Payment = /** @class */ (function () {
    function Payment(recipient, job, amt) {
        this.recipient = recipient;
        this.job = job;
        this.amt = amt;
    }
    Payment.prototype.print = function () {
        return "I own  " + this.recipient + " " + this.amt + " dollar(s) for this job: " + this.job;
    };
    return Payment;
}());
exports.Payment = Payment;
