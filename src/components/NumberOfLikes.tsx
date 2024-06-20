import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"
import {Box, IconButton, Snackbar, Typography} from "@mui/material"
import {useMutation} from "@tanstack/react-query"
import {useState} from "react"
import {API_URL, API_KEY} from "../utils/constants"

export default function NumberOfLikes({
	likes,
	id,
}: {
	likes: number
	id: string
}) {
	const [totalLikes, setTotalLikes] = useState(likes)
	const [openSnackbar, setOpenSnackbar] = useState(false)
	const mutation = useMutation({
		mutationFn: async () => {
			const response = await fetch(`${API_URL}/${id}`, {
				headers: {
					"app-id": API_KEY,
					"Content-Type": "application/json",
				},
				method: "PUT",
				body: JSON.stringify({likes: totalLikes + 1}),
			})
			return (await response.json()) as Post
		},
		onSuccess: (response) => {
			setOpenSnackbar(true)
			setTotalLikes(response.likes)
		},
		onError: (error) => console.log(error),
	})
	return (
		<Box sx={{display: "flex", alignItems: "center"}}>
			<IconButton
				onClick={() => mutation.mutate()}
				disabled={mutation.isPending}
			>
				<FavoriteBorderOutlinedIcon sx={{color: "red", fontSize: "1rem"}} />
			</IconButton>
			<Typography pl='0.25rem'>{totalLikes}</Typography>
			<Snackbar
				open={openSnackbar}
				autoHideDuration={8000}
				onClose={() => setOpenSnackbar(false)}
				message='Liked post'
			/>
		</Box>
	)
}
