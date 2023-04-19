const styles = {
  container: {
    minHeight: 'calc(100vh - 110px)',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    alignItems: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
  },
};

export default function Home() {
  return (
    <>
      <div style={styles.container}>
        <h1 style={styles.title}>Phonebook</h1>
        <p>Use this applicaton for your beautiful life</p>
      </div>
    </>
  );
}
