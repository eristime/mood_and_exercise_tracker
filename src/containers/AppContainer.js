import React from 'react';
import { Pedometer } from 'expo';
import AppNavigator from '../navigation/AppNavigator';
import { stepsToKM, formatDate, dateIsToday, orderRecords } from '../services/utils';
import deviceStorage from '../services/deviceStorage';
import RecordsContext from '../contexts/RecordsContext';


export class AppContainer extends React.Component {
  /*
  Contains application global state and loads it from local db and pedometer.
  Contains also methods to modify global state.
  */


  state = {
    isPedometerAvailable: 'checking',
    records: [],
    loading: true,
  }


  async componentDidMount() {
    /* 
    Loads steps from pedometers and application state from deviceStorage 
    */
    //await deviceStorage.removeRecords();
    const records = await deviceStorage.loadRecords();
    this.setState({ records: orderRecords(records) });

    await this.storeStepsFromPedometer();

    const newrecords = await deviceStorage.loadRecords();

    console.log('async app state', newrecords);
    console.log('ordered', orderRecords(newrecords));
    this.setState({ records: orderRecords(newrecords) });
    this.setState({ loading: false });
  }


  recordForTodayExists = (records, date) => {
    if (!records || records.length === 0) {
      return false
    }

    let recordExists = false;
    records.forEach(record => {

      if ( date.toDateString() === new Date(record.date).toDateString() ) {
        recordExists = true;
      }

    });
    return recordExists;
  };

  addRecord = async (date=new Date(), steps=null, happiness=null, activiness=null, note=null) => {
    /* Checks if a record for today exists:
      If a record is found, its values are modified.
      Otherwise a new record is created.
    */
  
    if (!this.recordForTodayExists(this.state.records, date=date)){
      // use utc time plus steps as id
      const newRecord = {
        id: parseInt(date.getTime() + Number(steps).toString()),
        steps: steps,
        happiness: happiness,
        activiness: activiness,
        note: note,
        date: formatDate(date),
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

  /*
  * A function to get a Record for today.
  * @param {array} records - List of Records-objects
  * @return {Record} - Todays record.
  * @return {undefined} - If there is no record for today.
  */
  getRecordForToday = (records) => {
  
    const result = records.filter(record => dateIsToday(new Date(record.date)));


    return result[0];
  }

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


    // get stepcount for every day for last week
    for (let i = 0; i < 7; i++){

      const start = new Date();
      start.setDate((new Date()).getDate() - i)
      start.setHours(0,0,0,0);
  
      const end = new Date();
      end.setDate((new Date()).getDate() - i)
      end.setHours(23,59,59,999);

      const stepCount = await Pedometer.getStepCountAsync(start, end)
      .catch( e => console.log("Could not get stepCount: " + e) );
      //console.log('stepcount', stepCount, start);
      await this.addRecord(date=start, steps=stepCount.steps);
    }

  };


  render() {
    return (
      <RecordsContext.Provider
        value={{
          ...this.state,
          updateRecord: this.updateRecord,
          getRecordForToday: this.getRecordForToday
        }}
      >
        <AppNavigator />
      </RecordsContext.Provider>
    );
  }
}

const dummyData = [{
  exercise: 2,
  date: '2019-03-08'
},
{
  exercise: 7.7,
  date: '2019-03-07'
}]