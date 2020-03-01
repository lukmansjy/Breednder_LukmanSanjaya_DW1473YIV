exports.baseUrlApi = 'http://localhost:5000';
exports.baseUrlApiVersion = 'http://localhost:5000/api/v1'

const token = window.localStorage.getItem('token')
exports.headerAuthorization = { Authorization: `Bearer ${token}` }