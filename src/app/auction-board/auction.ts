import { Observable, of } from 'rxjs';

export class Auction {
  constructor(
    public id: number,
    public title: string,
    public maxValue: number,
    public description: string,
    public deadline: string,
    public comments?: Array<any>
  ) {
    this.comments = [];
    // this.remainingTime = this.remainingTimeCount(this.deadline) as Observable<string>;
  }
  public remainingTime: Observable<string>;
  private expired = false;

  public minTwoDigits(val) {
    return val < 10 ? `0${val}` : val;
  }

  remainingTimeCount(deadlineDate): Observable<string>{
    const currentDate = new Date();
    const deadlineDay = deadlineDate.slice(8, 10);
    const deadlineMonth = deadlineDate.slice(5, 7);
    const deadlineYear = deadlineDate.slice(0, 4);

    const finishDate = new Date(deadlineYear, deadlineMonth - 1, deadlineDay);
    const remainingTime = finishDate.getTime() - currentDate.getTime();
    if (remainingTime > 0) {
      const seconds = remainingTime / 1000;
      let secondsLeft = Math.floor(seconds % 60);
      const minutes = seconds / 60;
      let minutesLeft = Math.floor(minutes % 60);

      const hours = minutes / 60;

      let hoursLeft = Math.floor(hours);
      
      const timeValue = [hoursLeft, minutesLeft, secondsLeft];

      const newTimeValue = timeValue.map((elem) => this.minTwoDigits(elem));
      let remainTime = `${newTimeValue[0]}:${newTimeValue[1]}:${newTimeValue[2]}`;
      return of(remainTime);
    } else return of('Expired');
  }
}
