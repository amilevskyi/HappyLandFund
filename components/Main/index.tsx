import { Container } from "react-bootstrap"

import styles from './main.module.css'

export const Main = ({ children }) => <Container fluid className={styles.container}>{children}</Container>