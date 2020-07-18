export class TaskForm {
    public id: number;
    public title = '';
    public description = '';
    public deadline: Array<{date: Date, hour: number, minutes: number}>;
    public hours: number;
    public minutes: number;
    public value: number;
}