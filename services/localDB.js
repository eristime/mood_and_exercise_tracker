import { SQLite } from 'expo';

const DBNAME = 'mood_and_exercise_tracker.DB';
const DB = SQLite.openDatabase(DBNAME);

export class Reminder {
  /* 
  Helper class to interact with reminders in sqlite.database
  */
  static init () {
    DB.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS reminders (id INTEGER PRIMARY KEY NOT NULL, notification_id INTEGER, time TEXT);'
      );
    }); 
  }

  static getReminder = reminderID => {
    return new Promise((resolve, reject) => {
      DB.transaction(tx => {
        tx.executeSql(
          `SELECT * FROM reminders WHERE notification_id=${reminderID};`,
          null,
          (_, { rows: { _array } }) => { resolve(_array) }
        );
      });
    });
  }


  static addReminder = (reminderID, time) => {
    DB.transaction(
      tx => {
        tx.executeSql('INSERT INTO reminders (id, time) values (?, ?)', [reminderID, time]);
        tx.executeSql('SELECT * FROM reminders', [], (_, { rows }) =>
          console.log(JSON.stringify(rows))
        );
      },
      null,
      null
    );
  };
}

export class Record {
  /* 
  Helper class to interact with records in sqlite.database
  */
  static init () {
    DB.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS \
        records (\
          id INTEGER PRIMARY KEY NOT NULL,\
          steps INTEGER,\
          happiness INTEGER,\
          activiness INTEGER,\
          date TEXT );'
      );
    }); 
  }

  static getRecords = () => {
    return new Promise((resolve, reject) => {
      DB.transaction(tx => {
        tx.executeSql(
          `SELECT * FROM records ORDER BY date(date) ASC;`,
          null,
          (_, { rows: { _array } }) => { resolve(_array) }
        );
      });
    });
  }

  static recordForTodayExists =  () => {
    1;
  };


  static _updateRecord = (recordID, steps=false, happiness=false, activiness=false) => {
    let stmt = `UPDATE records SET `
    let params = [];
    
    if (steps){
      stmt += 'steps = ?,';
      params.push(steps);
    }

    if (happiness){
      stmt += 'happiness = ?,';
      params.push(happiness);
    }

    if (activiness){
      stmt += 'activiness = ?,';
      params.push(activiness);
    }

    // remove last character, in this case the last comma
    stmt = stmt.substring(0, stmt.length - 1);
    stmt += 'WHERE id = ?;';
    params.push(recordID);

    DB.transaction(
      tx => {
        tx.executeSql(stmt, params,);
      },
      null,
      null
    );
  };

  static _insertRecord = (steps=false, happiness=false, activiness=false) => {
    /* Dynamically create insert clause for these parameters*/
    let stmt1 = 'INSERT INTO records (date, '
    let stmt2 = 'values (date("now"), ';
    let params = [];
    
    if (steps){
      stmt1 += 'steps,';
      stmt2 += '?,'
      params.push(steps);
    }

    if (happiness){
      stmt1 += 'happiness,';
      stmt2 += '?,'
      params.push(happiness);
    }

    if (activiness){
      stmt1 += 'activiness,';
      stmt2 += '?,'
      params.push(activiness);
    }

    // remove last character, in this case the last comma
    stmt1 = stmt1.substring(0, stmt1.length - 1);
    stmt1 += ')';

    stmt2 = stmt2.substring(0, stmt2.length - 1);
    stmt2 += ');';
    
    stmt = stmt1 + stmt2
    console.log('stmt', stmt)
    DB.transaction(
      tx => {
        tx.executeSql(stmt, params,);
      },
      null,
      null
    );
  };


  static addRecord = (steps=false, happiness=false, activiness=false) => {
    /* 
    Add a new record for today if an old one doesn't exist
    */
    return new Promise((resolve, reject) => {
      DB.transaction(
        async (tx) => {
          const id = await new Promise((resolve, reject) => {
            tx.executeSql(
              `SELECT * FROM records WHERE DATE(date)=DATE('now');`,
              [],
              (_, { rows: { _array } }) => { 
                //console.log('array', _array);
                if (_array.length !== 0){
                    const id = _array[0].id || null;
                    resolve(id);
                }
                resolve(null);
              },
              (e) => {console.log('error', e); resolve(null);}
            );
          })
          .catch(e => {console.log(e);});

          if (id) {
            this._updateRecord(id, steps, happiness, activiness);
          } else {
            this._insertRecord(steps, happiness, activiness);
          }

        },
        (e) => { reject(e) },
        (_, s) => { resolve(s) }
      );
    });
  };

  static _addRecord = (steps, happiness, activiness, date) => {

    DB.transaction(
      tx => {
        tx.executeSql('INSERT INTO records \
        (steps, happiness, activiness, date)\
        values (?, ?, ?, date("now"));', [steps, happiness, activiness]);
      },
      null,
      null
    );
  };


  static removeRecords = () => {
    return new Promise((resolve, reject) => {
      DB.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS records;',
          null,
          (_, { rows: { _array } }) => { resolve(_array) }
        );
      });
    });
  };

  
}
