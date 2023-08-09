import styled from "styled-components";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Header from "./Header";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const Main = styled.main`
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;
  background-color: var(--color-grey-50);
`;

const Container = styled.div`
  max-width: 120rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  margin: 0 auto;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header></Header>
      <Sidebar></Sidebar>
      <Main>
        <Container>
          <Outlet></Outlet>
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
