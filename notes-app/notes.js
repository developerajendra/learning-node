const fs = require('fs');
const chalk = require('chalk');

/**
 * getting all the notes
 */ 
const getNotes = ()=>{
    const note = loadNotes();
    note.forEach(data=>{
        console.log(data.title + ': ' + data.body);
    });
}


/**
 * adding the notes
 * @param {notes title} title 
 * @param {notes description} body 
 */
const addNotes = (title, body)=>{
    const _initialNOtes = loadNotes();

    const duplicateNotes = _initialNOtes.find(note=> note.title == title);
    debugger;
    duplicateNotes ? console.log('duplicate notes') :
     _initialNOtes.push({
        title:title,
        body:body
    });
    saveNotes(_initialNOtes)
};


/**
 * generating the notes
 * @param {notes array} notes 
 */
const saveNotes = (notes)=>{
    const _addedNotes =  JSON.stringify(notes)
    fs.writeFileSync('notes.json', _addedNotes);
};


/**
 * Removing the notes
 * @param {notes title} title 
 */
const removeNotes = (title)=>{
    const _allNotes = loadNotes();
    
    const removedNotes = _allNotes.length && _allNotes.filter((data)=>{

      

        return data.title !== title;
    });
    _allNotes.length == removedNotes.length ? console.log(chalk.red('no notes found')) : 
    console.log(chalk.green('notes removed')) 
    saveNotes(removedNotes)
    return removedNotes;
};


/**
 * Reading the specific note
 * @param {Note title} title 
 */
const readNotes = (title)=>{
    const notes = loadNotes();
    const matchedNotes =  notes.find(note=>{
        return note.title == title;
    });

    matchedNotes ? console.log(matchedNotes) : console.log(chalk.red('unable to find the note'));
    
};


/**
 * loading all the notes
 */
const loadNotes = ()=>{
    try{
        const _notesBuffer = fs.readFileSync('notes.json');
        const _dataString = _notesBuffer.toString();
        const data = _dataString.length > 1 && JSON.parse(_dataString);
        return data;
    }catch(e){
        return [];
    }
};


module.exports = {
    getNotes: getNotes,
    addNote: addNotes,
    removeNote:removeNotes,
    readNote:readNotes,
};

