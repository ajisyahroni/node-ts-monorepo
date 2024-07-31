import { sum, sumBy } from 'sum'


function makeid(length: any) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

//@ts-ignore
const datasets = Array.from({ length: 50 }).map((it, i) => ({
    id: i,
    name: makeid(i),
    updatedAt: new Date().getTime(),
    salary: Math.floor(Math.random() * 10001), // random number between 0 - 10_000
    department: ['IT', 'Digital Marketing', 'Administration']?.[Math.floor(Math.random() * 3)]
})) as any[]

console.log(sumBy(datasets, (it) => it?.salary))