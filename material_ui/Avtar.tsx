import {Stack,Avatar} from "@mui/material"

export const Avtar=()=>{
    return(
        <Stack spacing={4}>
            <Stack direction={"row"} >
                {/* for icon logo */}
                <Avatar sx={{bgcolor:'primary.light'}}>ST</Avatar>
                <Avatar sx={{bgcolor:'success.light'}}>SM</Avatar>
                {/* for Avtar image */}
            </Stack>
        </Stack>
    )
}