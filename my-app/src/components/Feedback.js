import React, { Component } from 'react';
import Statistics from './Statistics'
import FeedbackOptions from './FeedbackOptions'
import Section from './Section'
import Notification from './Notification'

class Feedback extends Component {

  state = {
  good: 0,
  neutral: 0,
  bad: 0
    }

     onLeaveFeedback=(option) => {
        this.setState({ [option]: this.state[option] +1 })
    }

    
    
    countTotalFeedback = () => {
        const {good} = this.state;
        const {neutral} = this.state
        const {bad} = this.state
        return  (good+neutral+bad)
    }
   
    countPositiveFeedbackPercentage = () => {
        if (this.countTotalFeedback() === 0) {
            return 0;
        }
        const good = this.state.good;
        return Math.round(good*100/this.countTotalFeedback())
    }
    
    render() {
         const totalFeedback = this.countTotalFeedback()
         const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage()
        
        
       return (<div>
           
           <Section>
            <h1>Please leave feedback</h1>
           <FeedbackOptions
               options={['good', 'neutral', 'bad']}
               onLeaveFeedback={this.onLeaveFeedback} />
           </Section>
           
           <Section> 
               {totalFeedback === 0 ?
                   <Notification /> : <Statistics
               good={this.state.good}
               neutral={this.state.neutral}
               bad={this.state.bad}
               total={totalFeedback}
               percentage={positiveFeedbackPercentage}
           />}
                  
               
           
           </Section>  

        </div>)
    }
}

export default Feedback