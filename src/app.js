import express from "express";

import { getAllOrders } from "./Service/OrderService.js";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

app.get("/api/orders", (req, res) => {
	const limit = +req.query.limit ?? 100;
	const orders = getAllOrders(limit);

	const html = `
        <h1 class="text-2xl font-bold my-4">Orders</h1>
        <ul>
            ${orders.map((order) => `<li>${order.orderId} ${order.orderDate}</li>`)}
        </ul>
    `;

	res.send(html);
});

app.get("/api/orders/delay", (req, res) => {
	const orders = getAllOrders();

	const html = `
        <h1 class="text-2xl font-bold my-4">Orders</h1>
        <ul>
            ${orders.map((order) => `<li>${order.orderId} ${order.orderDate}</li>`)}
        </ul>
    `;

	setTimeout(() => {
		res.send(html);
	}, 5000);
});

app.post("/api/orders", (req, res) => {
	const body = req.body;

	const newOrder = {
		id: body.id,
		orderDate: new Date().toISOString(),
	};

	const html = `
        <div>${newOrder.id} ${newOrder.orderDate}</div>
    `;

	res.send(html);
});
