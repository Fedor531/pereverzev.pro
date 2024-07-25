export default defineEventHandler(async () => {
	const date = new Date();

	console.log('date', date);

	return { date };
});
