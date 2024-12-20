import { Outlet } from "react-router-dom";
import Header from "@components/layout/Header/Header";
import { useEffect } from "react";
import { monitorAuthState } from "@store/auth/authSlice";
import { useAppDispatch } from "@store/hook";
import { Col, Container, Row } from "react-bootstrap";
import SidebarStart from "@components/layout/SidebarStart/SidebarStart";
import SidebarEnd from "@components/layout/SidebarEnd/SidebarEnd";

const MainLayout = () => {
  const dispatch = useAppDispatch();
  // مراقبة تغييرات حالة المستخدم
  useEffect(() => {
    dispatch(monitorAuthState());
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className="page-content">
        <Container fluid={"xl"}>
          <p className="d-flex flex-column flex-lg-row justify-content-center align-items-center column-gap-1 mb-4">
            <a className={`text-primary`}>Hiring in a hury ?</a>
            Find talented pros record time with upwort and keep business moving
          </p>
          <Row className="gx-2">
            <Col lg={'3'}>
              <SidebarStart />
            </Col>
            <Col>
              <Outlet />
            </Col>
            <Col lg={'3'}>
              <SidebarEnd />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default MainLayout;
