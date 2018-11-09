import * as React from 'react';

interface IProps { 
    timeZone: string
}

interface IState {
    date: string
    timeZone: string    
}

class TimeZone extends React.Component<IProps,IState>{

    constructor(props: IProps){
        super(props);
        this.state = {
            date: props.timeZone,
            timeZone: props.timeZone            
        }
    }

    public render() {
        return (
          <div className="TimeZone">
            <table>
                <tr>
                    <td>
                        {this.state.date}
                    </td>
                    <td>
                        <button onClick ={this.getTimeZoneDate}>GET DATE</button>
                    </td>
                </tr>
            </table>            
          </div>
        );
    }

    public setContent(response : any){
        this.setState({
          date : response.content
        })
    }

    public getTimeZoneDate = () => {
        return fetch('/timezone/'+this.state.timeZone,{
          headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json'     
           }
        })
        .then(response => response.json())
        .then(response => this.setContent(response))
      }
}

export default TimeZone;