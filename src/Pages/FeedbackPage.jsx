import { useState, useContext } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { UserContext } from "../context/UserContext";
import styles from "./FeedbackPage.module.css";

function FeedbackPage() {
  const { user } = useContext(UserContext);

  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(5);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      alert("Please login first");
      return;
    }

    if (message.trim().length < 10) {
      alert("Feedback must be at least 10 characters");
      return;
    }

    try {
      setLoading(true);

      await addDoc(collection(db, "feedback"), {
        userId: user.uid,
        email: user.email,
        message,
        rating,
        createdAt: serverTimestamp(),
      });

      setSuccess(true);
      setMessage("");
      setRating(5);

      setTimeout(() => setSuccess(false), 3000);

    } catch (error) {
      console.error("Feedback Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h2>We Value Your Feedback 💖</h2>

        {success && (
          <div className={styles.successBox}>
            ✅ Thank you! Your feedback has been submitted.
          </div>
        )}

        <form onSubmit={handleSubmit} className={styles.form}>
          {/* Star Rating */}
          <div className={styles.rating}>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={star <= rating ? styles.activeStar : styles.star}
                onClick={() => setRating(star)}
              >
                ★
              </span>
            ))}
          </div>

          {/* Message */}
          <textarea
            placeholder="Share your experience with us..."
            value={message}
            maxLength={300}
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          <div className={styles.counter}>
            {message.length}/300 characters
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit Feedback"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default FeedbackPage;