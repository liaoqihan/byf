'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	const collection = db.collection('user')
	let res = await collection.where({
		// username:event.username
		_id:event._id
	}).get()
	//返回数据给客户端
	console.log('user : ', res)
	return res
};
