"use client"

import { FormEvent, useState } from "react"
import { QuillEditor } from "../_components/editor/editorQuill"
import FormBtn from "../_components/form/formBtn"
import FormInputs from "../_components/form/formInputs"
import { useFormDataStore, useSelectionStore } from "@/libs/store"
import { postPost } from "@/apis/postApi"
import { processContentImages } from "@/utils/commonFormUtils"
import UploadOverlay from "../_components/overlay/uploadOverlay"
import { useMapStore } from "@/libs/storePin"
import RouterOverlay from "../_components/overlay/routerOverlay"
import FailModal from "@/components/commons/failModal"
import { Post } from "@/utils/type"

const Page = () => {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false)
    const [isRouterOverlayOpen, setIsRouterOverlayOpen] = useState(false)
    const [isFailModalOpen, setIsFailModalOpen] = useState(false)
    const { selectedContinent, selectedCountry, startDate, endDate } = useSelectionStore()
    const { formData, setFormData, posts, setPosts, resetFormData } = useFormDataStore()
    const { incrementPinCount } = useMapStore()
    const isFreeForm = true

    const handleInputChange = <K extends keyof Post>(field: K, value: Post[K]) => {
        setFormData({ ...formData, [field]: value })
    }

    const handleOverlaySubmit = async (e: FormEvent) => {
        e.preventDefault()

        const processedContent = await processContentImages(formData.content || "")

        const postData: Partial<Post> = {
            continent: selectedContinent || "아시아",
            region: selectedCountry!,
            tripStarDate: startDate ? startDate.toISOString() : "",
            tripEndDate: endDate ? endDate.toISOString() : "",
            title: formData.title,
            content: processedContent,
            shortPosts: [],
        }

        try {
            const newPost = await postPost(postData)
            const updatedPosts = [newPost, ...posts]
            setPosts(updatedPosts)
            resetFormData()
            incrementPinCount()
            setIsRouterOverlayOpen(true)
        } catch {
            setIsFailModalOpen(true)
        }
    }

    if (!formData) {
        return <div>Loading...</div>
    }

    return (
        <>
            <div className="w-[900px] mx-auto bg-SYSTEM-beige min-h-screen flex flex-col">
                <UploadOverlay
                    isOverlayOpen={isOverlayOpen}
                    setIsOverlayOpen={setIsOverlayOpen}
                    handleOverlaySubmit={handleOverlaySubmit}
                />
                <div className="mb-20">
                    <FormInputs formText="자유롭게 " postDetail={formData} handleInputChange={handleInputChange} />
                    <QuillEditor index={0} isFreeForm={isFreeForm} handleInputChange={handleInputChange} />
                    <FormBtn setIsOverlayOpen={setIsOverlayOpen} />
                </div>
            </div>
            {isRouterOverlayOpen && <RouterOverlay isRouterOverlayOpen={isRouterOverlayOpen} />}
            {isFailModalOpen && (
                <FailModal
                    isOpen={isFailModalOpen}
                    title="게시글 등록"
                    context="기록 글이 업로드되지 않았어요."
                    setIsOpen={() => setIsFailModalOpen(true)}
                />
            )}
        </>
    )
}

export default Page
