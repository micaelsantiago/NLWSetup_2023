const form = document.querySelector('#form-habits');
const nlwSetup = new NLWSetup(form);

const data = {
	run: ['01-01', '01-02', '01-06', '01-02', '01-10', '02-02', '02-05'],
	takePills: ['01-03', '01-01', '01-02', '01-06', '02-02', '03-01', '04-02', '05-06'],
	journal: ['01-02', '07-01', '08-02', '09-06']
};

nlwSetup.setData(data);
nlwSetup.load()