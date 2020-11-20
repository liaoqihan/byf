'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	event.create_time=Date.now()
	const collection = db.collection('user')
	const res = await collection.add(event)
	//返回数据给客户端
	return event
};
