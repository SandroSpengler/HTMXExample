export const getAllOrders = (limit = 0) => {
	if (limit > 0) {
		return generateOrders().slice(0, limit);
	}

	return generateOrders();
};

const generateOrders = () => {
	const orders = [];

	const order1 = {
		orderId: 100,
		orderDate: "2024-04-04T12:00:00+0000",
	};
	const order2 = {
		orderId: 200,
		orderDate: "2024-04-03T12:00:00+0000",
	};
	const order3 = {
		orderId: 300,
		orderDate: "2024-04-05T12:00:00+0000",
	};
	const order4 = {
		orderId: 300,
		orderDate: "2024-04-05T12:00:00+0000",
	};
	const order5 = {
		orderId: 300,
		orderDate: "2024-04-05T12:00:00+0000",
	};

	orders.push(order1);
	orders.push(order2);
	orders.push(order3);
	orders.push(order4);
	orders.push(order5);

	return orders;
};
