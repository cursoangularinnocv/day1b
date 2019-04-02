export default interface IWorker {
    name: string;
    surname: string;
    department: string;
    salary: number;
    getSalary(): number
}