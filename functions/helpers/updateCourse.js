const { table } = require('./airtable');
const formattedReturn = require('./formattedReturn');
module.exports = async (event) => {
    try {
        const {id, ...fields} = JSON.parse(event.body);
        const updatedCourse = await table.update([{id, fields}]);
        return formattedReturn(200, updatedCourse);
    } catch (err) {
        console.log(err);
        return formattedReturn(500, {msg: "Something went wrong"});
    }
};
