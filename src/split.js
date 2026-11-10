export function splitBill({ total, people, tipPercent }) {
    const totalInCents = Math.round(total * 100);
    const tipInCents = Math.round(totalInCents * (tipPercent / 100));
    const grandTotalInCents = totalInCents + tipInCents;
    const baseCentsPerPerson = Math.floor(grandTotalInCents / people);
    const leftoverCents = grandTotalInCents % people;

    const amountsInCents = Array(people).fill(baseCentsPerPerson); 

    return amountsInCents.map((cents, index) => (cents + (index < leftoverCents ? 1 : 0)) / 100); // extra cents go to the first people so the sum matches exactly.
}