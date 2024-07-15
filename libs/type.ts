import { UserInfoProps } from "@/components/layouts/type"
import { ContinentType } from "@/types/continent"
import { CreatePost, Post, memos, UpdatePost } from "@/types/post"
import { ThemeKeys } from "@/types/theme"
import { Dayjs } from "dayjs"

export type CreatePostState = {
    // formData 관련 상태
    formData: CreatePost
    posts: CreatePost[]
    quillEditors: memos[]
    setFormData: (data: CreatePost) => void
    setPosts: (posts: CreatePost[]) => void
    setQuillEditors: (editors: memos[]) => void
    resetFormData: () => void

    // selection 관련 상태
    selectedContinent: ContinentType | null
    selectedCountry: string | null
    startDate: Dayjs | null
    endDate: Dayjs | null
    selectedTheme: ThemeKeys[]
    selectedAddress: string | null
    setSelectedContinent: (continent: ContinentType | null) => void
    setSelectedCountry: (country: string | null) => void
    setStartDate: (date: Dayjs | null) => void
    setEndDate: (date: Dayjs | null) => void
    setSelectedTheme: (themeList: ThemeKeys[]) => void
    setSelectedAddress: (address: string) => void

    // 전체 상태 초기화 함수
    resetAll: () => void
}

export type PostDataState = {
    postId: number | null
    postDetail: Post | null
    setPostId: (postId: number | null) => void
    setPostDetail: (postDetail: Post | null) => void
}

export type UpdatePostDataState = {
    postId: number | null
    postDetail: UpdatePost | null
    setPostId: (postId: number) => void
    setPostDetail: (postDetail: UpdatePost | null) => void
}

export type MapStore = {
    pinCount: number
    incrementPinCount: () => void
    decrementPinCount: () => void
}

export type CommentState = {
    saveCommentId: number
    setSaveCommentId: (saveCommentId: number) => void
}

export type ModalStore = {
    showLoginModal: boolean
    openLoginModal: () => void
    closeModal: () => void
    isDelete: boolean
    setIsDelete: (isDelte: boolean) => void
}

export type UpdateCommentState = {
    isUpdateComment: boolean
    setIsUpdateComment: (isUpdateComment: boolean) => void
}

export type CreateCommentProps = {
    id: number
    content: string
    nickname: string
    likeCount: number
    createdAt: string
    postId: number
}

export type CreateCommentState<> = {
    comments: CreateCommentProps[]
    setComments: (comments: CreateCommentProps[]) => void
    addComment: (newComment: CreateCommentProps) => void
    updateComment: (updateComment: CreateCommentProps) => void
}

export type ThemeState = {
    showResult: boolean
    setShowResult: (value: boolean) => void
    topTags: ThemeKeys[]
    setTopTags: (tags: ThemeKeys[]) => void
}

export type LoginState = {
    isLoggedIn: boolean
    isLoading: boolean
    setIsLoggedIn: (isLoggedIn: boolean) => void
    userInfo: UserInfoProps | undefined
    setUserInfo: (userInfo: UserInfoProps) => void
}

export type SearchState = {
    isSearchOpen: boolean
    setIsSearchOpen: (isSearchOpen: boolean) => void
}
