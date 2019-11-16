export const styles = {
  cardList: {
    maxWidth: 1080,
    margin: "20px auto",
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
  },

  search: {
    background: "white",
    border: "#efefef",
    margin: "5% auto 0",
    display: "block",
    padding: 20,
    width: "100%",
    maxWidth: 1040,
    textAlign: "center" as const
  }
};
