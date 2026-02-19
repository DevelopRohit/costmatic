import styles from "./CategorySection.module.css";
import { useNavigate } from "react-router-dom";

function CategorySection() {
  const navigate = useNavigate();

  const categories = [
    {
      name: "LIPS",
      path: "/lips",
      image:
        "https://www.sugarcosmetics.com/cdn/shop/files/Mettle-Satin-Lipstick-4.jpg?v=1743677462&width=500",
    },
    {
      name: "EYES",
      path: "/eyes",
      image:
        "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600",
    },
    {
      name: "FACE",
      path: "/face",
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600",
    },
    {
      name: "SKIN",
      path: "/skin",
      image:
        "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=600",
    },
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Shop By Category</h2>

      <div className={styles.grid}>
        {categories.map((item, index) => (
          <div
            key={index}
            className={styles.card}
            onClick={() => navigate(item.path)}
          >
            <img src={item.image} alt={item.name} />

            <div className={styles.overlay}>
              <h3>{item.name}</h3>
              <span>Shop Now →</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategorySection;
