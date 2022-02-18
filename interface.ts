interface Person {
  name: string;
  age: number;
  speak(lang: string): void;
  speed(amount: number): number;
}

const henry: Person = {
  name: "henry",
  age: 30,
  speak(text: "string") {
    console.log(text);
    return "text";
  },
  speed(amt) {
    return amt;
  },
};

const helloPerson = (person: Person) => console.log(person.name);

helloPerson({
  name: "person1",
  age: 30,
  speed: (la: number) => la,
  speak: () => {
    console.log();
  },
});

helloPerson(henry);
