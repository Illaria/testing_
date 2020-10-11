import { Container, AppBar, Toolbar, Typography } from "@material-ui/core";
import styles from '../styles/layout.module.scss'

export default function Layout({ children, noAppBar }) {
    return (
        <Container className={styles.layout}>
            {
                !noAppBar &&
                <AppBar position="static" className={styles.appbar}>
                    <Toolbar classes={{ root: styles.toolbarRoot }}>
                        <img src="/hacktoberfest.svg" className={styles.hacktoberfestLogo} />
                        <Typography className={styles.hacktoberfestText}>acktoberfest, Mumbai</Typography>
                        <img src="/sponsors-light.svg" className={styles.appbarSponsors} />
                    </Toolbar>
                </AppBar>
            }
            {children}
        </Container>
    )
}
