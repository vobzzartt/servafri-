const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    if (!fs.existsSync(dir)) return results;
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = dir + '/' + file;
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css') || file.endsWith('.md')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = [...walk('./app'), ...walk('./components'), ...walk('./lib'), './README.md'];

let count = 0;
files.forEach(file => {
    if(!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    let newContent = content
        .replace(/Nubis/g, 'ServAfri')
        .replace(/usenubis\.com/g, 'servafri.com')
        .replace(/usenubis/g, 'servafri')
        .replace(/nubis/g, 'servafri');
    
    if (content !== newContent) {
        fs.writeFileSync(file, newContent, 'utf8');
        console.log('Updated', file);
        count++;
    }
});
console.log('Total files updated:', count);
