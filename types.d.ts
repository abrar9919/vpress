declare interface PostAPIResponse {
	data: Post[]
	total: number
	page: number
	limit: number
}

declare interface Post {
	id: string
	image: string
	likes: number
	publishDate: string
	tags: string[]
	text: string
	owner: Owner
}

declare interface Owner {
	firstName: string
	id: string
	lastName: string
	picture: string
	title: string
}
