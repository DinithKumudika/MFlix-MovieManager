import { Outlet } from "react-router-dom"
import { Container } from "@components/Container"
import { Header } from "@components/Header"

export const Root = () => {
  return (
    <>
        <Header/>
        <Container>
            <Outlet/>
        </Container>
    </>
  )
}
