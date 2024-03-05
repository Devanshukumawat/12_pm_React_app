import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

function MuiTest() {

  let Div = styled(Box)({
    backgroundColor:"black",
    color:"white"

  })

  const Heading = styled(Typography)({
    fontSize:"100px"
  })

  const Div2 = styled(Box)({
    backgroundColor:"green",
    color:"white"
  })



    return ( 
        <>
            <Div>
                <Heading variant="h2">Hello Class</Heading>
                <Div2>Hello</Div2>
                <Box sx={{
                    backgroundColor:"yellow",
                    color:"black"
                }}>Devanshu sir</Box>
            </Div>
        </>
     );
}

export default MuiTest;