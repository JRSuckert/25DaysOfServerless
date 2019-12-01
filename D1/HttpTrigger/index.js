

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const dreidel = ["Nun", "Gimmel", "Hay", "Shin"]
    const dreidel_unicode = ["נ", "ג", "ה", "ש"]
    context.res = {
        status: 200,
        body: dreidel_unicode[Math.floor(Math.random() * Math.floor(4))]
    };
};