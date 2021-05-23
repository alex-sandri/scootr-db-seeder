const fetch = require("node-fetch");

const getRandomInRange = (from, to, fixed) =>
{
    return parseFloat((Math.random() * (to - from) + from).toFixed(fixed));
}

const f = async () =>
{
	console.log("Sending Request: " + new Date().toISOString());

	await fetch("http://localhost:4000/vehicles", {
		method: "POST",
		headers: {
			"Authorization": "Bearer TODO", // TODO: replace this with a valid session id
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			battery_level: getRandomInRange(1, 100, 0),
			location: {
				latitude: getRandomInRange(40, 45, 6),
				longitude: getRandomInRange(12, 15, 6),
			},
		}),
	});

	f();
};

f();
