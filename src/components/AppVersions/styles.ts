import { makeStyles } from "@saleor/macaw-ui";

const useStyles = makeStyles(
  theme => ({
    container: {
      display: "flex",
      justifyContent: "flex-end"
    },
    versionItem: {
      [theme.breakpoints.down("md")]: {
        fontSize: theme.spacing(1.75)
      },
      [theme.breakpoints.up("md")]: {
        fontSize: theme.spacing(2)
      },
      color: "rgba(40, 35, 74, 0.6)",
      lineHeight: theme.spacing(3.2),
      fontSize: theme.spacing(2),
      marginLeft: theme.spacing(1.5),
      letterSpacing: "0.02em"
    }
  }),
  {
    name: "AppVersions"
  }
);

export default useStyles;
