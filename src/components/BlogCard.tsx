import {Box, Card, CardContent, CardMedia, Typography} from "@mui/material"
import NumberOfLikes from "./NumberOfLikes"
import Tag from "./Tag"
import Owner from "./Owner"
import {getDateInDDMMYYYFormat} from "../utils/string"

export default function BlogCard({
	image,
	id,
	likes,
	publishDate,
	tags,
	text,
	owner,
}: Post) {
	const {firstName, id: ownerID, lastName, picture, title} = owner
	return (
		<Card sx={{maxWidth: {xs: "100%", sm: "90%", md: 320}, height: "100%"}}>
			<CardMedia sx={{height: 200}} image={image} />
			<CardContent>
				<Typography
					sx={{
						// Total number of lines is set to 2
						display: "-webkit-box",
						overflow: "hidden",
						WebkitBoxOrient: "vertical",
						WebkitLineClamp: 2,
					}}
				>
					{text}
				</Typography>
				<Owner
					firstName={firstName}
					lastName={lastName}
					id={ownerID}
					picture={picture}
					title={title}
				/>
				<Box
					pt='1rem'
					sx={{display: "flex", alignItems: "center", gap: "1rem"}}
				>
					{tags.map((tag) => (
						<Tag tag={tag} key={tag} />
					))}
				</Box>
				<Box
					pt='1rem'
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<NumberOfLikes likes={likes} id={id} />

					<Typography>{getDateInDDMMYYYFormat(publishDate)}</Typography>
				</Box>
			</CardContent>
		</Card>
	)
}
