import styles from "./LuxuryVideoSection.module.css";

function LuxuryVideoSection() {
  return (
    <section className={styles.section}>
      {/* LEFT SIDE VIDEO */}
      <div className={styles.videoContainer}>
        <video
          src="https://www.sugarcosmetics.com/cdn/shop/videos/c/vp/025186792aed472483e312b426619838/025186792aed472483e312b426619838.HD-1080p-7.2Mbps-62332467.mp4?v=0"
          autoPlay
          loop
          muted
          playsInline
          className={styles.video}
        />
      </div>

      {/* RIGHT SIDE CONTENT */}
      <div className={styles.content}>
        <h2 className={styles.title}>GLIDE PEPTIDE SERUM</h2>
        <h5 className={styles.subtitle}>LIPSTICK</h5>

        <p>
          Own the moment effortlessly. Meet SUGAR Glide Peptide Serum Lipstick,
          the serum-infused matte that gives you rich, saturated colour with
          feather-light comfort. One glide lays down a plush, velvety finish
          while a skin-loving blend of Peptides, Hyaluronic Acid, Squalane,
          Bakuchiol and Jojoba Oil cocoons your lips in hydration and care.
          Think vibrant payoff that feels like skincare so your lips look
          smooth, soft and luxe from the first swipe to well past your last
          meeting.
        </p>

        <p>
          Soft powder pigments hug lips for an airy, cloud-matte that won’t tug
          or dry out. The result? 8+ hours of comfortable wear, colour that
          stays true, and lips that look fresh, refined and camera-ready.
          Finished with a chic SUGAR monogram, this is sophistication you’ll
          want to show off on repeat. Ready to glide, slay and never look back?
        </p>

        <button className={styles.btn}>Shop Now</button>
      </div>
    </section>
  );
}

export default LuxuryVideoSection;
