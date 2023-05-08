interface Classes {
  [name: string]: any;
}

export const cl = (classes: Classes) => {
	return Object.entries(classes)
		.filter(([, value]) => value)
		.map(([key, value]) => value === 'className' ? value : key)
		.join(' ');
};

const className = 'bold-viccc';

console.log(cl({
	className,
	'bold': true,
	'regular': false,
	'light': true
}));