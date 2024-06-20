import {Chip} from "@mui/material"

export default function Tag({tag}: {tag: string}) {
	return <Chip label={tag} variant='outlined' />
}
