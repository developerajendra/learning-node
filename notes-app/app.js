
const yargs = require('yargs');
const notes = require('./notes.js');

//Customize yargs version
yargs.version('1.1.0')


//create add command
yargs.command({
    command:'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,
            type:'string'
        },
        body:{
            describe:'Note body',
            demandOption: true,
            type:'string'
        }
    },
    handler: (argv)=>{
        notes.addNote(argv.title, argv.body);
    }
});

//Create remove commands
yargs.command({
    command:'remove',
    builder:{
        title:{
            describe:'note title',
            demandOption: true,
            type:'string'
        }
    },
    describe: 'Remove a note',
    handler: (argv)=>{
        notes.removeNote(argv.title);
    }
});

//create list command
yargs.command({
    command:'list',
    describe: 'List a note',
    handler: ()=>{
        notes.getNotes()
    }
});

//create read command
yargs.command({
    command:'read',
    describe: 'Read a note',
    builder:{
        title:{
            describe:'note title',
            demandOption: true,
            type:'string'
        }
    },
    handler: (argv)=>{
       notes.readNote(argv.title);
    }
})

yargs.parse();

// console.log(yargs.argv);

 //add, remove, read, list
