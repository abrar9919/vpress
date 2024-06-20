import {Box, Typography} from "@mui/material"

export default function Owner({
	firstName,
	lastName,
	id,
	picture,
	title,
}: Owner) {
	return (
		<Box display='flex' gap='0.5rem' alignItems='center' py='1rem'>
			<img
				style={{height: 30, width: 30, borderRadius: "50%"}}
				src={picture}
				loading='lazy'
			></img>
			<Typography textTransform='capitalize'>{`${title} ${firstName} ${lastName}`}</Typography>
		</Box>
	)
}
