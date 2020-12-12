const replaceInFiles = require('replace-in-files');

const options = {
    // See more: https://www.npmjs.com/package/globby
    // Single file or glob
    files: 'test-replace.txt',
    // Multiple files or globs
    //   files: [
    //     'path/to/file',
    //     'path/to/other/file',
    //     'path/to/files/*.html',
    //     'another/**/*.path',
    //   ],


    // See more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
    // Replacement
    //from: /foo/g,  // string or regex
    //to: 'bar', // string or fn  (fn: carrying last argument - path to replaced file)

    // _s text domain
    from: /'_s'/g,
    to: 'my-theme-name',
    // _s functions names
    from: /_s_/g,
    to: 'my_theme_name_',
    // _s functions names
    from: /Text Domain: _s/g,
    to: 'Text Domain: my-theme-name',


    // See more: https://www.npmjs.com/package/glob
    optionsForFiles: { // default
        "ignore": [
            "**/node_modules/**"
        ]
    },


    // format: `${fileName}-${year}-${month}-${day}_${hour}:${minute}:${second}.{fileExtension}`
    //            fileName-2017-11-01_21:29:55.js
    // date of createFile old file or last modificate (if not find create date)
    saveOldFile: false, // default


    //Character encoding for reading/writing files
    encoding: 'utf8',  // default


    shouldSkipBinaryFiles: true, // default
    onlyFindPathsWithoutReplace: false, // default
    returnPaths: true, // default
    returnCountOfMatchesByPaths: true // default
};

async function main() {
    try {
        const {
            changedFiles,
            countOfMatchesByPaths,
            replaceInFilesOptions
        } = await replaceInFiles(options)
            .pipe({ from: /theme-path/g, to: 'theme_path' })
            .pipe({ from: /second/g, to: 'first' })
        console.log('Modified files:', changedFiles);
        console.log('Count of matches by paths:', countOfMatchesByPaths);
        console.log('was called with:', replaceInFilesOptions);
    } catch (error) {
        console.log('Error occurred:', error);
    }
}

main();