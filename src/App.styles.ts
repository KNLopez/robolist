export const styles = {
  cardContainer: {
    maxWidth: 1080,
    margin: "20px auto"
  },
  cardList: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gridGap: 10,
    width: "100%"
  },

  card: {
    background: "#fff",
    padding: 20,
    textAlign: "center" as const,
    cursor: "pointer",
    "&:hover": {
      background: "#efefef"
    }
  }
};
