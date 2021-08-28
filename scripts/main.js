const roles = require('./sources/roles.json');

const quotes = [
 //Insert quotes here.
]

function getQuote(){
    for(var i = 0; i < quotes.length; i++){
        return quotes[Math.floor(Math.random() * quotes.length)];
    }
}   

function compareTo(arr, str){
    var count = 0;
    
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === str){
            count++;
        }
    }

    return count;
}

function genRoleStr(category){
    const where = [];
    var roleMessage = '';

    for(var i = 0; i < roles.length; i++){
        if(roles[i].class_category === category){
            where.push(i);
        }
    }

    for(var c = 0; c < where.length; c++){
        roleMessage = roleMessage + roles[where[c]].symbol  + ' - ' + roles[where[c]].class_name + '\n';
    }

    return roleMessage;
}

function getTitle(category){
    var name = '';

    switch(category){
        case 'main':
            name = 'Category Roles';
            break;

        case 'eng':
            name = 'English Classes';
            break;
        
        case 'math':
            name = 'Math Classes';
            break;

        case 'sst':
            name = 'Social Studies';
            break;

        case 'sci':
            name = 'Science Classes';
            break;

        case 'wlang':
            name = 'World Languages';
            break;

        case 'comp':
            name = 'Computer Classes';
            break;

        case 'misc':
            name = 'Miscellaneous Roles';
            break;
    }

    return name;
}

function getColor(category){
    var color = '';

    switch(category){
        case 'eng':
            color = '#0000ff';
            break;
        
        case 'math':
            color = '#ff0000';
            break;

        case 'sst':
            color = '#ffff00';
            break;

        case 'sci':
            color = '00ff00';
            break;

        case 'wlang':
            color = '#ff00aa';
            break;

        case 'comp':
            color = '#000000';
            break;

        case 'misc':
            color = '#00fffb';
            break;

        default:
            color = '#00cdc4';
    }

    return color;
}


function lowerCaseArr (args) {
    for(var i = 0; i < args.length; i++){
        args[i] = args[i].toLowerCase();
    }
    
    return args;
}

function sleep(ms) {
    const date = Date.now();
    let currDate = null;
    do {
      currDate = Date.now();
    } while (currDate - date < ms);
  }

module.exports = {
    lowerCaseArr: lowerCaseArr,
    getQuote: getQuote,
    compareTo: compareTo,
    genRoleStr: genRoleStr,
    getTitle: getTitle,
    getColor: getColor,
    sleep: sleep
}

