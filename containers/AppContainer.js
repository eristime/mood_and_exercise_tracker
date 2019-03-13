import React from 'react';
import { Pedometer } from 'expo';
import AppNavigator from '../navigation/AppNavigator';
import { stepsToKM, formatDate, dateIsToday } from '../services/utils';
import deviceStorage from '../services/deviceStorage';
import RecordsContext from '../contexts/RecordsContext';

export class AppContainer extends React.Component {
  /*
  Contains application global state and loads it from local db and pedometer.
  */
  state = {
    isPedometerAvailable: 'checking',
    records: [],
    loading: true,
    updateRecord: this.updateRecord
  };

  async componentDidMount() {
    /* 
    Loads steps from pedometers and application state from deviceStorage 
    */
    //await deviceStorage.removeRecords();
    const records = await deviceStorage.loadRecords();
    this.setState({ records });
    await this.storeStepsFromPedometer();

    const newrecords = await deviceStorage.loadRecords();

    console.log('async app state', newrecords);
    this.setState({ records: newrecords });
    this.setState({ loading: false });
  }


  recordForTodayExists = (records) => {
    if (!records || records.length === 0) {
      return false
    }
    
    let recordExists = false;
    records.forEach(record => {

      if ( dateIsToday(new Date(record.date)) ) {
        recordExists = true;
      }

    });
    return recordExists;
  };

  addRecord = async (steps=null, happiness=null, activiness=null, note=null) => {
    /* Checks if a record for today exists:
      If a record is found, its values are modified.
      Otherwisee a new record is created.
    */
    console.log('this.recordForTodayExists(this.state.records)', this.recordForTodayExists(this.state.records));
    if (!this.recordForTodayExists(this.state.records)){
      const newRecord = {
        steps: steps,
        happiness: happiness,
        activiness: activiness,
        note: note,
        date: formatDate(new Date()),
      };
  
      if (steps) {
        newRecord.exercise = stepsToKM(steps);
      }
      
      const updatedRecords = this.state.records;
      updatedRecords.push(newRecord);

      this.setState({ records: updatedRecords });
      await deviceStorage.saveRecords(updatedRecords);

    } else {
      await this.updateRecord(steps, happiness, activiness, note);
    }
  }


  updateRecord = async (id, happiness=false, activiness=false, note=false) => {
    /*
    Update the record in AppContainer state and database.
    */
    const updatedRecords = this.state.records.map((record) => {
      
      if (record.id === id){
        if (happiness) {
          record.happiness = happiness;
        }
  
        if (activiness) {
          record.activiness = activiness
        }

        if (note) {
          record.note = note
        }

      }

      return record;
    });

    this.setState({ records: updatedRecords });
    await deviceStorage.saveRecords(updatedRecords);

  };

  storeStepsFromPedometer = async () => {
    /*
    Add todays step count to db
    */

    // check if pedometer available
    Pedometer.isAvailableAsync().then(
      result => {
        this.setState({
          isPedometerAvailable: String(result)
        });
      },
      error => {
        this.setState({
          isPedometerAvailable: "Could not get isPedometerAvailable: " + error
        });
      }
    );

    // get today's step count and save it to db
    const start = new Date();
    start.setHours(0,0,0,0);

    const end = new Date();
    end.setHours(23,59,59,999);
    
    const stepCount = await Pedometer.getStepCountAsync(start, end)
      .catch( e => console.log("Could not get stepCount: " + e) );
    console.log('stepcount', stepCount);
    await this.addRecord(steps=stepCount.steps);
  };


  render() {
    return (
      <RecordsContext.Provider
        value={{...this.state, updateRecord:this.updateRecord}}
      >
        <AppNavigator />
      </RecordsContext.Provider>
    );
  }
}
