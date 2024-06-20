/**
 * The function `getNextPageParam` calculates the next page number based on the total number of items
 * and the current page number.
 * @param {PostAPIResponse} pageData - The `pageData` parameter in the `getNextPageParam` function is
 * of type `PostAPIResponse`, which contains information about the current page, such as the total
 * number of items, the limit per page, and the current page number.
 * @returns The function `getNextPageParam` returns the next page number if there are more posts
 * available based on the total number of posts, limit, and current page number in the
 * `PostAPIResponse`. If there are more posts available, it returns the next page number
 * (`pageData.page + 1`), otherwise it returns `undefined`.
 */
const getNextPageParam = (pageData: PostAPIResponse) => {
	const {total, limit, page} = pageData
	if (total - limit * page > 0) return pageData.page + 1

	return undefined
}

export {getNextPageParam}
