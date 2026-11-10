export function splitBill({ total, people, tipPercent }) {
    const totalInCents = Math.round(total * 100);
    const tipInCents = Math.round(totalInCents * (tipPercent / 100));
    const grandTotalInCents = totalInCents + tipInCents
    const baseCentsPerPerson = Math.floor(grandTotalInCents / people);
    const leftoverCents = (totalInCents + tipInCents) % people;

    const peopleArray = Array(people).fill(baseCentsPerPerson);

    return peopleArray.map((cents, index) => (cents + (index < leftoverCents ? 1 : 0)) / 100);
}