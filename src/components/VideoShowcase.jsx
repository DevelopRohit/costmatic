import styles from "./VideoShowcase.module.css";

const videos = [
  {
    id: 1,
    title: "Glide Peptide Plum",
    price: "Rs. 699.00",
    video:
      "https://cdn.shopify.com/videos/c/vp/942f257256d1425991e1bf48f7533ac6/942f257256d1425991e1bf48f7533ac6.HD-720p-1.6Mbps-63759152.mp4",
  },
  {
    id: 2,
    title: "Serum Lipstick",
    price: "Rs. 499.00",
    video:
      "https://cdn.shopify.com/videos/c/vp/f4109a66ef824d6fbfbe23cd15914092/f4109a66ef824d6fbfbe23cd15914092.HD-720p-1.6Mbps-62445527.mp4",
  },
  {
    id: 3,
    title: "HD Perfection",
    price: "Rs. 1,399.00",
    video:
      "https://cdn.shopify.com/videos/c/vp/35fb3df50e3d423a8d12c190ef98cc83/35fb3df50e3d423a8d12c190ef98cc83.HD-720p-1.6Mbps-62445691.mp4",
  },
  {
    id: 4,
    title: "Tipsy Lips",
    price: "Rs. 199.00",
    video:
      "https://cdn.shopify.com/videos/c/vp/ca87cf21b83142c79483213bbb7bce73/ca87cf21b83142c79483213bbb7bce73.HD-720p-1.6Mbps-62446037.mp4",
  },
];

function VideoShowcase() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Featured Reels</h2>

      <div className={styles.grid}>
        {videos.map((item) => (
          <div key={item.id} className={styles.card}>
            <video
              src={item.video}
              autoPlay
              loop
              muted
              playsInline
              className={styles.video}
            />

            <div className={styles.overlay}>
              <h4>{item.title}</h4>
              <p>{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default VideoShowcase;
