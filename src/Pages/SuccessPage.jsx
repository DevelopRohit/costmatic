import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function SuccessPage() {
  const { orderId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ padding: "150px", textAlign: "center" }}>
      <h2>🎉 Payment Successful!</h2>
      <p>Order ID: {orderId}</p>
      <p>Redirecting to home...</p>
    </div>
  );
}

export default SuccessPage;
