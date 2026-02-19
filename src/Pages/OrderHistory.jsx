import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function OrderHistory() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const snapshot = await getDocs(collection(db, "orders"));
      const list = snapshot.docs.map(doc => doc.data());
      setOrders(list);
    };

    fetchOrders();
  }, []);

  return (
    <div style={{ padding: "120px 80px" }}>
      <h2>Your Orders</h2>

      {orders.map((order, index) => (
        <div key={index} style={{
          marginBottom: "30px",
          padding: "20px",
          background: "#f9fafb",
          borderRadius: "10px"
        }}>
          <h4>Order ID: {order.orderId}</h4>
          <p>Total: ₹{order.total}</p>

          {order.items.map((item) => (
            <p key={item.id}>
              {item.name} × {item.qty}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}

export default OrderHistory;
