import { Sort } from "./sorting/sort";

const sort = new Sort(105);

console.log(sort.array);
sort.bubbleSort<number>(sort.array);
