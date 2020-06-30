const fs = require("fs");
const path = require("path");
const archiver = require("archiver");
const inputDir = "test";

function main(){
    const fileList = getAllFiles(inputDir);
    console.log("File list to be archived \n",fileList);
    archive(fileList);
}

/* Function archiving all the files taking the filelist as an argument */
function archive(fileList){
    console.log("Starting archiving!");
    const output = fs.createWriteStream(__dirname + "/output.zip");
    const archive = archiver("zip");

    output.on("close", function() {
        console.log("archiving is completed!");
    });
    
    // pipe archive data to the file
    archive.pipe(output);

    archive.on("error", function(err) {
        console.log(err);
    });
    
    // appending all the file to the archive
    fileList.forEach(function(filePath){
        archive.file(filePath, { name: path.basename(filePath)});
    });

    archive.finalize();
}

/* Getting all the file list from the directory and sub directories recursively */
function getAllFiles(dirPath,arrayOfFiles){
    const files = fs.readdirSync(dirPath)
    arrayOfFiles = arrayOfFiles || []

    files.forEach(function(file) {

        //if it's a directory, append the respective path to arrayOfFiles
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
        } else {
            arrayOfFiles.push(path.join(dirPath, "/", file))
        }
    })
    return arrayOfFiles
}

main();