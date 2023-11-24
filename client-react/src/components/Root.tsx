import { Outlet } from "react-router-dom"
import { Container } from "components/Container"
import { Header } from "components/Header"

export const Root = () => {
  return (
    <>
        <Header/>
        <div className="h-20"></div>
        <Container>
            <Outlet/>
        </Container>
    </>
  )
}
