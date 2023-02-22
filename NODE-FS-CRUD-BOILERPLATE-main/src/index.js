const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.writeFile(fileName, content, (err) => {
		if (err) throw err;
		console.log(`The file ${fileName} has been created with content "${fileContent}"`);
	  });
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.readFile(fileName, 'utf8', (err, data) => {
		if (err) throw err;
		console.log(`The content of the file ${fileName} is "${data}"`);
	  });
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.readFile(fileName, 'utf8', (err, data) => {
		if (err) throw err;
		const updatedContent = data + fileContent;
		fs.writeFile(fileName, updatedContent, (err) => {
		  if (err) throw err;
		  console.log(`The file ${fileName} has been updated with content "${updatedContent}"`);
		});
	  });
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.unlink(fileName, (err) => {
		if (err) throw err;
		console.log(`The file ${fileName} has been deleted`);
	  });
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }