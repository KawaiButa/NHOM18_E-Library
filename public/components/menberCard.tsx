import { Montserrat, Roboto } from "next/font/google";
import { Button, Card, Stack, Image, Container } from "react-bootstrap";

import User from "../models/user";
const roboto = Roboto({
    weight: "700",
    subsets: ["vietnamese"],
})

const montserrat = Montserrat({
    weight: "400",
    subsets: ["latin"],
})

export default function MemberCard({user = null}) {
  if (user == null) return;
  return (
    <>
      <Card className="border-bottom border-5" style={{width: "973px", height: "631px"}}>
        <Card.Header className="d-flex justify-content-end" style={{borderWidth: '0px', backgroundColor: "transparent"}}>
          <Button
            className="d-flex round-circle justify-content-center align-items-center"
            size="sm"
            style={{
              width: "50px",
              height: "50px",
              margin: "0px",
              padding: "0px",
              borderRadius: "50px",
              borderWidth: "5px",
              borderColor: "#D9D9D9",
              backgroundColor: "#D9D9D9",
            }}
          >
            <Image
              src="/icon_pen_add.ico"
              alt="iconPenAdd"
              width={20}
              height={20}
              className="d-flex"
            />
          </Button>
        </Card.Header>
        <Card.Body style={{marginLeft: "48px", marginRight: "69px", marginTop: "30px"}}>
            <Stack direction="horizontal" gap={5}>
                <div style={{width: "60%", height: "100%"}}>
                    <Image src= "/test_book_pic.png" alt="bookPic" fluid/>
                </div>
                <Container style={{}}>
                    <Stack gap={2}>
                        <h1 className={roboto.className}>{user.name}</h1>
                        <p className={montserrat.className}>Member id: {user.id}</p>
                        <p className={montserrat.className}>Email: {user.email}</p>
                        <p className={montserrat.className}>Reader type: {user.readerType}</p>
                        <p className={montserrat.className}>Address: {user.address}</p>
                        <p className={montserrat.className}>Date of birth: {user.dateOfBirth.toISOString().split('T')[0]}</p>
                        <p className={montserrat.className}>Member date: {user.memberDate.toISOString().split('T')[0]}</p>
                    </Stack>
                </Container>
            </Stack>
        </Card.Body>
      </Card>
    </>
  );
}
