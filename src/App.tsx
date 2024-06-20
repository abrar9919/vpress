import {Box, Grid, Typography} from "@mui/material"
import {useInfiniteQuery} from "@tanstack/react-query"
import BlogCard from "./components/BlogCard"
import {useInView} from "react-intersection-observer"
import React, {useEffect} from "react"
import {API_URL, API_KEY, API_LIMIT} from "./utils/constants"
import {getNextPageParam} from "./utils/numbers"

function App() {
	const fetchProjects = async ({
		pageParam,
	}: {
		pageParam: number
	}): Promise<PostAPIResponse> => {
		console.log(pageParam)
		const res = await fetch(`${API_URL}?limit=${API_LIMIT}&page=${pageParam}`, {
			headers: {
				"app-id": API_KEY,
			},
		})
		return await res.json()
	}
	const {data, error, fetchNextPage, hasNextPage, isFetchingNextPage} =
		useInfiniteQuery({
			queryKey: ["posts"],
			queryFn: fetchProjects,
			initialPageParam: 0,
			getNextPageParam: (lastPage) => getNextPageParam(lastPage),
		})
	const {ref, inView} = useInView()
	useEffect(() => {
		if (inView && !isFetchingNextPage) {
			fetchNextPage()
		}
	}, [inView])
	console.log({hasNextPage})
	if (error) return <>Something went wrong.</>
	return (
		<>
			<Grid container rowGap={3}>
				{data?.pages.map(({data}, index) => (
					<React.Fragment key={index}>
						{data.map(({id, image, likes, publishDate, tags, text, owner}) => (
							<Grid item xs={12} sm={6} md={3} key={id}>
								<BlogCard
									id={id}
									image={image}
									likes={likes}
									publishDate={publishDate}
									tags={tags}
									text={text}
									owner={owner}
								/>
							</Grid>
						))}
					</React.Fragment>
				))}
			</Grid>
			<Box pb='3rem' pt='2rem'>
				{data && data.pages.length > 0 && (
					<div ref={ref}>
						{isFetchingNextPage && (
							<Typography textAlign='center'>
								Fetching more blogs for you...
							</Typography>
						)}
						{!hasNextPage && (
							<Typography textAlign='center'>
								You've reached the end of the list.
							</Typography>
						)}
					</div>
				)}
			</Box>
		</>
	)
}

export default App
