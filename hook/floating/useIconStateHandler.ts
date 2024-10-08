"use client"

import { useEffect } from "react"
import useLikeHandler from "@/hook/floating/useLikeHandler"
import { useIconStateHandlerProps } from "./type"

const useIconStateHandler = ({ postId, post, setIconState }: useIconStateHandlerProps) => {
    const { handleLikeClick, liked } = useLikeHandler({
        postId: postId,
        initialLiked: post?.hasLiked || false,
        post: post!,
    })

    useEffect(() => {
        setIconState(prevState => prevState.map(icon => (icon.name === "like" ? { ...icon, isActive: liked } : icon)))
    }, [liked, setIconState])

    return { handleLikeClick, liked }
}

export default useIconStateHandler
