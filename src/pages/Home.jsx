const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Page Home</h1>
    </div>
  );
}
