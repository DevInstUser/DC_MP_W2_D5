var i = 9;

	for (j=1; j<9;j++)

	{

		if (i-j >= 0) {


			console.log(i + " bottles of beer on the wall");

			console.log(i + " bottles of beer");

			console.log("Take "+ j + " down, pass it around");

			console.log(i-j + " bottles of beer on the wall");

			i=i-j;

		}

		else {
			console.log("Wait, there is not enough to take " + j + " down !");
			console.log("So lets keep these " + i + " bottles of beer on the waaaaaallllll"); 
			break;
		}

	}



