import React, { Component } from 'react';
import './Calendar.css';

class Calendar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      work : 3,
      weekend : 3,
      day : 1,
      year:null,
      month:null
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.getPrev = this.getPrev.bind(this);
    this.getNext = this.getNext.bind(this);
  }

  shouldComponentUpdate(nextState) {
    return nextState !== this.state;
  }

  componentWillMount(){
    let date = new Date();
    let Year = + date.getFullYear();
    let Month = + date.getMonth();

      this.setState({year: Year});
      this.setState({month: Month});
  }

  handleInputChange(event) {
   const target = event.target;
   const value = target.value;
   const name = target.name;

   this.setState({
     [name]: value
   });
  }

  getPrev(){
    let Month = this.state.month;
    let Year = this.state.year;
    if (Month > 0) {
      this.setState({
        month: Month - 1});
    } else {
      this.setState({ year: Year - 1});
      this.setState({ month: 11});
    }
    console.log('', this.state.month)
    console.log('', this.state.year)
  }

  getNext(){
    let Month = this.state.month;
    let Year = this.state.year;
    if (Month < 11) {
      this.setState({month: Month + 1});
    } else {
      this.setState({year: Year + 1});
      this.setState({ month: 0});  
    }
    console.log('', this.state.month)
    console.log('', this.state.year)
  }

  render() {

    let year = this.state.year;
    let month = this.state.month;
    let firstday = 1;
    let lastday = + new Date(year, month + 1, 0).getDate();
    const Calendar = [];
    const WeekDays =['one', 'two', 'three', 'four', 'five', 'six', 'seven'];

      for (firstday; firstday<=lastday; firstday++ ){
        let day = firstday;
        let d = new Date(year, month, day);
        let dayofweek = + d.getUTCDay();
        let numberdate = d.getDate();
        let inCalendar = <div key = {firstday} className = {`${WeekDays[dayofweek]}`}>{numberdate}</div>;
        Calendar.push(inCalendar);
      };

    const options = {
      year: 'numeric',
      month: 'long'
    };
    let MonthInCalendar = new Date(year, month).toLocaleString("en-US", options).toUpperCase();
    
    const WorkShedul = Calendar.concat();
    let weekend = +this.state.weekend;
    let workday =+this.state.work;
    let inputnumber = +this.state.day;
    let inputstart = + inputnumber-1;

    for (let start = + inputstart; start < WorkShedul.length; start += weekend+1) {
      let arrnumber = start;
      let day = start+1;
      let d = new Date(year, month, day);
      let dayofweek = + d.getUTCDay();
      let numberdate = d.getDate();
      let dateinarr =<div key = {day} className = {`${WeekDays[dayofweek]} + active` }>{numberdate}</div>;;
      if (start === WorkShedul.length) break;
      WorkShedul[arrnumber]=dateinarr;
        
      for (var j = 0; j < workday-1; j++) {
       start +=1 ; 
        let arrnumber = start;
        let day = start+1;
        let d = new Date(year, month, day);
        let dayofweek = + d.getUTCDay();
        let numberdate = d.getDate();
        let dateinarr = <div key = {day} className = {`${WeekDays[dayofweek]} + active`}>{numberdate}</div>;;
        if (start === WorkShedul.length) break;
          WorkShedul[arrnumber]=dateinarr;
      }
    };


    return (
      <div className = 'calendar'>
        <form>
        <label htmlFor = 'day'>First work day</label>
          <input name="day" id="day" type="text" value={this.state.day} onChange={this.handleInputChange}/>
        <label htmlFor = 'work'>Work days</label>
          <input name="work" id="work" type="text" value={this.state.work} onChange={this.handleInputChange}/>
        <label htmlFor = 'weekend'>Weekends</label>
          <input name="weekend" id="weekend" type="text" value={this.state.weekend} onChange={this.handleInputChange}/>
      </form>
        <div className = 'calendar-container'>
        <div className = 'navCalendar'>
          <button className = 'getPrev' onClick ={this.getPrev}>Prev</button>
          <span>{MonthInCalendar}</span>
          <button className = 'getNext' onClick ={this.getNext}>Next</button>
        </div>
        <div className ='box' >
          <div className = {`${WeekDays[0]}`}>MON</div>
          <div className = {`${WeekDays[1]}`}>TUE</div>
          <div className = {`${WeekDays[2]}`}>WED</div>
          <div className = {`${WeekDays[3]}`}>THU</div>
          <div className = {`${WeekDays[4]}`}>FRI</div>
          <div className = {`${WeekDays[5]}`}>SAT</div>
          <div className = {`${WeekDays[6]}`}>SUN</div> 
          {WorkShedul}
        </div>
        </div>
      </div>
    );
  }
}

export default Calendar;
